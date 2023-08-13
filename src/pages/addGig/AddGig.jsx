import React, { useReducer, useState } from "react";
import "./AddGig.scss";
import { INITIAL_STATE, gigReducer } from "../../reducers/gigReducer";
import upload from "../../utils/upload";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";

const AddGig = () => {
  const [singlefile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(gigReducer, INITIAL_STATE);

  const handleChange = (event) => {
    dispatch({
      type: "CHANGE_INPUT",
      payload: { name: event.target.name, value: event.target.value },
    });
  };

  const handleFeature = (event) => {
    event.preventDefault();
    dispatch({
      type: "ADD_FEATURE",
      payload: event.target[0].value,
    });
    event.target[0].value = "";
  };

  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singlefile);

      const images = await Promise.all(
        // files is a FileList object. [...files] converts it to normal js file array.
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: "ADD_IMAGES", payload: { cover, images } });
    } catch (error) {
      console.log(error);
    }
  };

  console.log(state);

  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (gig) => {
      return newRequest.post("/gigs", gig);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate(state);
    // navigate("/mygigs");
  };

  return (
    <div className="addGig">
      <div className="container">
        <h1>Add New Gig</h1>
        <div className="sections">
          <div className="left">
            <label htmlFor="">Title</label>
            <input
              type="text"
              name="title"
              placeholder="e.g. I will do something I am really good at"
              onChange={handleChange}
            />
            <label htmlFor="">Category</label>
            <select name="cat" id="cat" onChange={handleChange}>
              <option value="design">Design</option>
              <option value="web">Web Development</option>
              <option value="animation">Animation</option>
              <option value="music">Music</option>
            </select>

            <div className="images">
              <div className="imagesInput">
                <label htmlFor="">Cover Images</label>
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor="">Upload Images</label>
                <input
                  type="file"
                  name=""
                  id=""
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? "uploading" : "Upload"}
              </button>
            </div>

            <label htmlFor="">Description</label>
            <textarea
              name="desc"
              cols="30"
              rows="16"
              placeholder="Brief description to introduce your service"
              onChange={handleChange}
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className="right">
            <label htmlFor="">Service Title</label>
            <input
              type="text"
              name="shortTitle"
              placeholder="e.g. One-page web design"
              onChange={handleChange}
            />
            <label htmlFor="">Short Description</label>
            <textarea
              name="shortDesc"
              cols="30"
              rows="10"
              placeholder="Short description for your service"
              onChange={handleChange}
            ></textarea>
            <label htmlFor="">Delivery Time (e.g. 3 days)</label>
            <input
              type="number"
              name="deliveryTime"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="">Revision Number</label>
            <input
              type="number"
              name="revisionNumber"
              min={1}
              onChange={handleChange}
            />
            <label htmlFor="">Add Features</label>
            <form action="" className="addFeature" onSubmit={handleFeature}>
              <input type="text" name="" placeholder="e.g. page design" />
              <button type="submit">Add</button>
            </form>
            <div className="addedFeatures">
              {state?.features?.map((feature) => (
                <button
                  key={feature}
                  onClick={() =>
                    dispatch({ type: "REMOVE_FEATURE", payload: feature })
                  }
                >
                  {feature}
                  <span> X</span>
                </button>
              ))}
            </div>
            <label htmlFor="">Price</label>
            <input type="number" name="price" min={1} onChange={handleChange} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddGig;
