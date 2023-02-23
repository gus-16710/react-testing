import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const DoggyDirectory = () => {
  const [selectedBreed, setSelectedBreed] = useState("");
  const [breeds, setBreeds] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [dogImages, setDogImages] = useState([]);

  const handleClickSearch = async () => {
    setIsLoading(true);

    const { data } = await axios.get(
      `https://dog.ceo/api/breed/${selectedBreed}/images`
    );

    setIsLoading(false);
    setDogImages(data.message);
  };

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("https://dog.ceo/api/breeds/list/all");
      setBreeds(Object.keys(data.message));
    })();
  }, []);

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Doggy Directory</h5>
        <Link to="/" className="mb-4 d-block">Home</Link>
        <div className="row">
          <div className="col-10">
            <select
              className="form-select"
              value={selectedBreed}
              onChange={(e) => setSelectedBreed(e.target.value)}
            >
              <option value="" disabled>
                Select a breed
              </option>
              {breeds.map((breed) => (
                <option key={breed} value={breed}>
                  {breed}
                </option>
              ))}
            </select>
          </div>
          <div className="col-2">
            <button
              className="btn btn-warning"
              type="button"
              disabled={!selectedBreed}
              onClick={handleClickSearch}
            >
              Search
            </button>
          </div>
        </div>
        {dogImages.length > 0 && !isLoading && (
          <div className="px-5 mx-5 text-end" data-testid="results-count">
            <p className="fs-5">{dogImages.length} results</p>
          </div>
        )}
        <div className="mt-5 d-flex justify-content-center flex-wrap px-5 mx-5">
          {dogImages.length === 0 && !isLoading && (
            <img
              src="./img/undraw_relaxing_walk.svg"
              className="mx-auto d-block mt-4 w-50"
              alt=""
            />
          )}
          {isLoading && (
            <div className="d-flex align-items-center ">
              <p className="h1 me-2">Loading</p>
              <div
                className="spinner-border ms-auto text-info fs-3"
                role="status"
                aria-hidden="true"
              ></div>
            </div>
          )}
          {dogImages.length > 0 &&
            !isLoading &&
            dogImages.map((imgSrc, index) => (
              <img
                key={`${index}-${selectedBreed}`}
                src={imgSrc}
                className="img-thumbnail w-25"
                alt={`${selectedBreed} ${index + 1} of ${dogImages.length}`}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default DoggyDirectory;
