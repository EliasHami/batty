"use client"
import { useFormContext, useFieldArray } from "react-hook-form"

export default function Provisions({}){
  const { control, register, formState } = useFormContext()
  const { errors } = formState
  const { fields, append, remove } = useFieldArray({
    control,
    name: "provisions"
  });

  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id}>
          <div className="form-group col">
            <label>Provsion name</label>
            <input type="text" {...register(`provisions.${index}.name`)} className={'form-control' + (errors.provisions?.[index] ? ' is-invalid' : '')} />
            <div className="invalid-feedback">{errors.provisions?.[index].name}</div>
          </div>
          <div className="form-group col">
            <label>Provsion service</label>
            <input type="text" {...register(`provisions.${index}.service`)} className={'form-control' + (errors.provisions?.[index] ? ' is-invalid' : '')} />
            <div className="invalid-feedback">{errors.provisions?.[index].service}</div>
          </div>
          <button type="button" className="btn btn-danger" onClick={() => remove(index)}>Delete</button>
        </div>
      ))}
      <button
        type="button"
        className="btn btn-secondary"
        onClick={() => append({ quantity:"", service : "" })}
      >
        Add
      </button>
    </>
  )
}