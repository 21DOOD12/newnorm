import axios from "axios";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import firebase from "./../../config/FbConfig";
import "./FullCard.css";

function FullCard() {
  let history = useHistory();
  let { id } = useParams();
  const [postData, setPostData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://norma-76317-default-rtdb.firebaseio.com/news/${id}.json`)
      .then((r) => {
        setPostData(r.data);
      });
  }, []);
  let removePost = (e) => {
    let desertRef = firebase
      .storage()
      .ref()
      .child(`images/${postData.fileName}`);
    firebase
      .database()
      .ref("news/" + id )
      .remove()
      .then(() => {
        desertRef.delete();
        history.push('/news')
      });
  };
  return (
    <div className="container complex__info fullcard">
      {postData ? (
        <>
          {" "}
          <img src={postData.fileLink} alt="" className="photo" />
          <h2 className="fullcard__title">{postData.title}</h2>
          <span className="fullcard__title">{postData.text}</span>
        </>
      ) : null}
    </div>
  );
}

export default FullCard;
