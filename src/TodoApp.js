import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { nanoid } from "nanoid";
import "./App.css";

export default function Input() {
  const [Item, setItem] = useState("");
  const [SavedNotes, setSavedNotes] = useState(
    JSON.parse(localStorage.getItem("todo-list")) || []
  );
  const [EditMode, setEditMode] = useState(false);
  const [EditID, setEditID] = useState(null);
  const [EditValue, setEditValue] = useState("");

  useEffect(() => {
    const savedArray = JSON.parse(localStorage.getItem("todo-list"));
    console.log(savedArray);
    if (savedArray) {
      setSavedNotes(savedArray);
    }
  }, []);

  useEffect(() => {
    console.log("setting");
    console.log(SavedNotes);
    localStorage.setItem("todo-list", JSON.stringify(SavedNotes));
  }, [SavedNotes]);

  function addItem() {
    if (!Item) {
      alert("Enter Item");
      return;
    }
    if (EditMode) {
      const editedItem = SavedNotes.map((item) => {
        if (item.id === EditID) {
          item.value = EditValue;
        }
        return item;
      });
      setSavedNotes(editedItem);
      setEditMode(false);
      setEditID(null);
      setEditValue("");
      setItem("");
    } else {
      const item = {
        id: nanoid(),
        value: Item,
      };
      const newNotes = [...SavedNotes, item];
      setSavedNotes(newNotes);
      setItem("");
    }
  }

  function deleteItem(id) {
    const newArray = SavedNotes.filter((item) => item.id !== id);
    setSavedNotes(newArray);
  }

  function editItem(id) {
    const specificItem = SavedNotes.find((item) => item.id === id);
    setEditMode(true);
    setEditID(id);
    setEditValue(specificItem.value);
    setItem(specificItem.value);
  }

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className=" col-sm-12 col-md-8 col-lg-6">
          <div className="box">
            <h1 id="h1">Todo List</h1>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  input-container">
              <input
                type="text"
                placeholder="Add an item"
                value={Item}
                onChange={(e) => setItem(e.target.value)}
              />
              <button className="button2" onClick={() => addItem()}>
                {EditMode ? "Edit" : "Add"}
              </button>
            </div>

            {SavedNotes.map((item) => {
              return (
                <h1 className="itemlist" key={item.id}>
                  {EditMode && EditID === item.id ? (
                    <>
                      <input
                        type="text"
                        placeholder="Edit"
                        value={EditValue}
                        onChange={(e) => setEditValue(e.target.value)}
                      />
                      <button onClick={() => addItem()}>
                        <i
                          className="fa fa-floppy-o"
                          id="save"
                          aria-hidden="true"
                        ></i>
                      </button>
                    </>
                  ) : (
                    <>
                      <Link to="/List">
                        <div title={item.value}>
                          {item.value}
                        </div>
                      </Link>

                      <button onClick={() => editItem(item.id)}>
                        <i
                          className="fa fa-pencil"
                          id="edit"
                          aria-hidden="true"
                        ></i>
                      </button>
                      <button onClick={() => deleteItem(item.id)}>
                        <i className="fa fa-trash" aria-hidden="true"></i>
                      </button>
                    </>
                  )}
                </h1>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}


 