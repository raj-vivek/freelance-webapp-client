import React from "react";
import { Link, useOutletContext } from "react-router-dom";
import "./MyGigs.scss";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { images } from "../../../images";

const MyGigs = () => {
  const [device] = useOutletContext();

  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  const queryClient = useQueryClient();

  const { isLoading, data, error } = useQuery({
    queryKey: ["myGigs"],
    queryFn: () => {
      return newRequest.get(`/gigs?userId=${currentUser._id}`).then((res) => {
        return res.data;
      });
    },
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/gigs/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["myGigs"]);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
  };

  return (
    <div className="myGigs">
      {isLoading ? (
        "Loading"
      ) : error ? (
        "Something went wrong"
      ) : (
        <div className="container">
          <div className="title">
            <h1>Gigs</h1>
            <Link className="link" to="/addGig">
              <button>Add New Gig</button>
            </Link>
          </div>
          <table>
            <thead>
              <tr>
                {(device == "desktop" ||
                  device == "laptop" ||
                  device == "tabletPortrait") && <th>Image</th>}
                <th>Title</th>
                {(device == "desktop" ||
                  device == "laptop" ||
                  device == "tabletPortrait") && <th>Price</th>}
                <th>Sales</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((gig) => (
                <tr key={gig._id}>
                  {(device == "desktop" ||
                    device == "laptop" ||
                    device == "tabletPortrait") && (
                    <td>
                      <img className="gigImg" src={gig.cover} alt="" />
                    </td>
                  )}
                  <td>
                    <Link to={`/gig/${gig._id}`} className="link">
                      {device == "desktop" ||
                      device == "laptop" ||
                      device == "tabletPortrait"
                        ? gig.title
                        : `${gig.title.slice(0, 23)}...`}
                    </Link>
                  </td>
                  {(device == "desktop" ||
                    device == "laptop" ||
                    device == "tabletPortrait") && <td>{gig.price}</td>}
                  {<td>{gig.sales}</td>}
                  <td>
                    <img
                      className="deleteImg"
                      src={images.delete}
                      alt=""
                      onClick={() => handleDelete(gig.id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyGigs;
