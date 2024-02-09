import { useDispatch, useSelector } from "react-redux";
import { deleteBook } from "../BooksSlice";
import { Link } from "react-router-dom";

function ShowUsers() {
  const books = useSelector((state) => state.booksReducers.books);
  console.log(books);
  const dispatch = useDispatch();
  const handleDelete = (id)=>{
dispatch(deleteBook(id))

  }
  return (
    <>
      <div>List of Books</div>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {books &&
            books.map((book) => {
              const { id, title, author } = book;
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td>{author}</td>
                  <td>
                    <div style={{ display: "flex", gap: "10px" }}>
                      <Link to="/edit-book" state={{id, title, author}}><button style={{backgroundColor:"blue", color:"white"}}>Edit</button></Link>
                      <button onClick={()=>{handleDelete(id)}} style={{backgroundColor:"red", color:"white"}}>Delete</button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
}

export default ShowUsers;
