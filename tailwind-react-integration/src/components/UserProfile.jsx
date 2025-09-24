function UserProfile() {
  return (
    <div className="user-profile bg-gray-100 md:p-8 sm:p-4 md:max-w-sm-400px sm:max-w-xs mx-auto my-20 rounded-lg shadow-lg">
      <img src="https://via.placeholder.com/150" 
      alt="User"
      className="rounded-full md:w-36 h-36 mx-auto sm:w-24 h-24 hover:scale-110 transition-transform duration-300 ease-in-out"
      />
      <h1 className="md:text-xl sm:text-lg text-blue-800 my-4 hover:text-blue-500">John Doe</h1>
      <p className="text-gray-600 md:text-base sm:text-sm hover:shadow-xl">Developer at Example Co. Loves to write code and explore new technologies.</p>
    </div>
  );
}

export default UserProfile;