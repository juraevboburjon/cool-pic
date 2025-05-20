// import React, { useEffect, useState } from "react";
// import axios from "axios";

// const Comments = ({ postId }) => {
//   const [comments, setComments] = useState([]);
//   const author = "googler88@gmail.com";
//   const [text, setText] = useState("");

//   const host = import.meta.env.VITE_HOST;

//   // Получить комментарии при загрузке
//   useEffect(() => {
//     const fetchComments = async () => {
//       try {
//         const res = await axios.get(`${host}/api/comment/post/${postId}`);
//         setComments(res.data);
//       } catch (error) {
//         console.error("Ошибка при загрузке комментариев", error);
//       }
//     };
//     fetchComments();
//   }, [host, postId]);

//   // Отправить новый комментарий
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!author || !text) {
//       alert("Пожалуйста, заполните все поля");
//       return;
//     }
//     try {
//       await axios.post(`${host}/api/comment/create`, { postId, author, text });

//       setText("");
//       // обновить список комментариев
//       const res = await axios.get(`${host}/api/comment/post/${postId}`);
//       setComments(res.data);
//     } catch (error) {
//       console.error("Ошибка при отправке комментария", error);
//     }
//   };

//   console.log(comments);

//   return (
//     <div>
//       <h3>Комментарии</h3>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Ваше имя"
//           value={author}
//           onChange={(e) => setAuthor(e.target.value)}
//         />
//         <textarea
//           placeholder="Ваш комментарий"
//           value={text}
//           onChange={(e) => setText(e.target.value)}
//           maxLength={500}
//         />
//         <button type="submit">Добавить комментарий</button>
//       </form>

//       <ul>
//         {comments.map((c) => (
//           <li key={c._id}>
//             <strong>{c.author}:</strong> {c.text}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Comments;
