

const DoctorInfoCard = ({ doctorItem }) => {
    const { name, image, rate, position } = doctorItem;

    return (
        <div className="my-5">
            <div className=" max-w-sm rounded overflow-hidden"
                style={{ boxShadow: ' 1px 3px 80px 0px rgba(0, 0, 0, 0.22)' }}>
                <img className="w-full max-h-[400px]" src={image} alt="Sunset in the mountains" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <div className="flex justify-between items-center">
                        <p className="text-gray-700 text-base">
                            Expert : <span className="text-lg font-semibold">{position}</span>
                        </p>
                        <div>

                            <button className="bg-white">
                                <img className="w-[40px]" src="https://i.ibb.co/bPCK0Q5/5158472.png" alt="" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default DoctorInfoCard;