import React, {useState} from "react";
import useWindowResize from "./useWindowResize"
import useForm from "./useForm";

export default function DemoHook1() {

  const { width, height} = useWindowResize();
  const { values, errors, handleChange, handleBlur } = useForm({ username: "" });

  return (
      <div>
          {width >= 700 ? ( <p>Width lớn hơn 700</p> ) : ( <p> Width nhỏ hơn hoạc bằng 700</p>)}
      </div>
    // <>
    //   <div className="form-group">
    //     <label htmlFor />Username
    //     <input
    //       type="text"
    //       name="username"
    //       id
    //       value = {values.username}
    //       onChange={handleChange}
    //       onBlur={handleBlur}
    //       className="form-control"
    //       placeholder
    //       aria-describedby="helpId"
    //     />
    //     {errors.username ? ( <div className="alert alert-danger">{errors.username}</div>) : null}
    //   </div>
    // </>
  );
}
