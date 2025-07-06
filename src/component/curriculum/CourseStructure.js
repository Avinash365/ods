// CourseStructure.jsx
const CourseStructure = () => {
    return (
        <div className="min-h-[600px] mt-10 bg-card-bg/20 rounded-3xl mx-auto p-6 md:p-24 flex flex-col gap-8">
            <CoursePrice label="Summary" amount="" />
             <Divider />
            <CourseVideo />
            <Divider />
            <CourseVideo />
            <Divider />
            <CoursePrice label="Subtotal" amount="$51.38" />
            <Divider />
            <CoursePrice label="Coupon Discount" amount="0%" />
            <Divider />
            <CoursePrice label="Tax" amount="$5.00" />
            <Divider />
            <CoursePrice label="Total" amount="$56.38" />
        </div>
    );
};

const Divider = () => (
    <div className="border-t border-gray-300 w-full" />
);

export default CourseStructure;

// CourseVideo.jsx
const CourseVideo = () => {
    return (
        <div className="flex flex-col sm:flex-row items-start gap-6">
            <iframe
                className="w-[120px] md:w-[250px] h-[80px] md:h-[200px] rounded-2xl"
                src="https://www.youtube.com/embed/zYhBJoBUSYA?controls=0&showinfo=0&rel=0&modestbranding=1&enablejsapi=1"
                title="Introduction Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
            ></iframe>

            <div className="flex flex-col justify-between h-full text-sm md:text-base gap-2">
                <p className="text-gray-800 font-semibold">
                    Adipiscing elit, sed do eiusmod tempor
                </p>
                <p className="text-gray-600">
                    Lorem ipsum dolor sit amet...
                </p>
                <p className="text-green-600 font-bold">
                    $24.69
                </p>
            </div>
        </div>
    );
};

// CoursePrice.jsx
const CoursePrice = ({ label, amount }) => {
    return (
        <div className="flex justify-between text-sm md:text-2xl font-medium text-gray-700">
            <p>{label}</p>
            <p>{amount}</p>
        </div>
    );
};
