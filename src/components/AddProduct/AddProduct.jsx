import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { productCollection, uploadProductPhoto } from "../../firebase";
import { addDoc } from "firebase/firestore";
import "./AddProduct.css";

export default function AddProduct({ category }) {
  const { user } = useContext(AppContext);
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [picture, setPicture] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!user || !user.isAdmin) {
    return null;
  }

  function onChangeName(event) {
    setName(event.target.value);
  }
  function onChangeYear(event) {
    setYear(event.target.value);
  }
  function onChangeDescription(event) {
    setDescription(event.target.value);
  }
  function onChangePrice(event) {
    setPrice(event.target.value);
  }
  function onChangePicture(event) {
    const file = event.target.files[0];
    setPicture(file);
  }

  function onFormSubmit(event) {
    event.preventDefault();

    if (!picture) {
      alert("Please upload an image");
      return;
    }

    setIsSubmitting(true);

    uploadProductPhoto(picture)
      .then((pictureUrl) =>
        addDoc(productCollection, {
          category: category.id,
          name: name,
          year: year,
          description: description,
          price: price,
          picture: pictureUrl,
          path: name.replaceAll(" ", "-").toLowerCase(),
        })
      )
      .then(() => {
        setName("");
        setDescription("");
        setYear("");
        setPrice("");
        setPicture(null);
      })
      .catch((error) => {
        console.log("Failed to add product:", error);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  }

  return (
    <div className="AddProduct">
      <form onSubmit={onFormSubmit}>
        <h3>Create a new product</h3>
        <label>
          Name:
          <input
            type="text"
            value={name}
            name="name"
            onChange={onChangeName}
            required
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            value={price}
            name="price"
            onChange={onChangePrice}
            min={0}
            required
          />
        </label>
        <label >
          Picture:
          <input 
            type="file"
            name="picture"
            onChange={onChangePicture}
            required
          />
        </label>
        <label>
          Year:
          <input
            type="text"
            value={year}
            name="year"
            onChange={onChangeYear}
            required
          />
          </label>
          <label>
          Description:
          <input
            type="text"
            value={description}
            name="description"
            onChange={onChangeDescription}
            required
          />
          
        </label>
        <button className=" neon-btn" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}