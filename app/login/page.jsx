export default function page() {
    return (
        <div className="grid place-content-center w-screen h-screen bg-gray-300">
            <div className="w-[500px] h-[400px] bg-white p-10 flex flex-col justify-between items-center">
                <h2 className="text-center text-4xl">Login</h2>
                <div className="w-full">
                    <form action="">
                        <div className="flex flex-col gap-3">
                            <input type="text" className="bg-transparent h-12 w-full border rounded-lg px-5" placeholder="Email" />
                            <input type="text" className="bg-transparent h-12 w-full border rounded-lg px-5" placeholder="Password" />

                            {/* Show password / Forgot password */}
                            <div className="flex justify-between">
                                <div className="flex gap-2">
                                <input id="show-password" type="checkbox" />
                                <label htmlFor="show-password" className="text-xs">Show password</label>
                                </div>

                                <a href="#" className="text-xs text-blue-800">Forgot password?</a>
                            </div>

                            {/* Botón de enviar */}
                            <button type="submit" className="uppercase bg-[#4c33ff] rounded-lg w-full h-12">
                                Login
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
