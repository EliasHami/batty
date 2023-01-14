"use client"
import { useFieldArray } from "react-hook-form";

export default function Parts({ parts, control, register, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "parts"
  });

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id}>
          <div className="form-group col">
            <label>Part name</label>
            <input type="text" {...register(`parts.${index}.name` as never)} className={'form-control' + (errors?.[index] ? ' is-invalid' : '')} />
            <div className="invalid-feedback">{errors?.[index].name}</div>
          </div>
          {/* <Provisions */}
          <button type="button" className="btn btn-danger" onClick={() => remove(index)}>Delete</button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => append({ name:"", provisions : [] })}
      >
        Add
      </button>
    </>
  )
}