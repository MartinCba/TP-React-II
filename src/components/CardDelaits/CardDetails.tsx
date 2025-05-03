
export default function CardDetails({ game }) {
    return (
        <div className="flex justify-center items-center flex-col bg-[#2e165b] w-xl8 h-xl3 mb-60 mt-10 p-5 border border-red-800 rounded-2xl">
            <div className="flex justify-center items-center">
                <img src={game.background_image || "public/noImage.png"} alt={game.name} className="w-xl min-w-xl h-xl object-cover object-top rounded-[15px]" />
                 <div className="m-15"> {/* INFO */}
                    <h1>Nombre: {game.name}</h1>
                    <h1>Fecha de lanzamiento: {game.released}</h1>
                    <h1>Sitio web: <a href={game.website}></a>{game.website}</h1>
                    <h1>Rating: {game.rating}</h1>
                    <h1>Slug: {game.slug}</h1>

                </div>
            </div>
            <p>{game.description_raw}</p>

        </div>
    )
}
