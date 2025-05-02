type inputProps = {
    obtenerValueBuscador: (valor: string) => void
}

export default function input({obtenerValueBuscador}: inputProps) {
    const inputSearchHandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        obtenerValueBuscador(event.target.value)
    }

  return (
    <input type="search" placeholder="Buscar" className="border bg-neutral-600 rounded-lg w-xl m-5 p-2 focus:outline-none focus:ring-0" onChange={inputSearchHandler}></input>
  )
}