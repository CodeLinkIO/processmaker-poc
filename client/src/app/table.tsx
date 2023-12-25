export const ProcessTable = ({ processes }) => {
  if (!processes) {
    return null;
  }
  return (
    <div className="relative overflow-x-auto">
      <h4>Processes table</h4>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Process name
            </th>
            <th scope="col" className="px-6 py-3">
              Desc
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
            <th scope="col" className="px-6 py-3">
              Created at
            </th>
          </tr>
        </thead>
        <tbody>
          {processes.map((process) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={process.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {process.name}
              </th>
              <td className="px-6 py-4">{process.description}</td>
              <td className="px-6 py-4">{process.status}</td>
              <td className="px-6 py-4">{process.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export const UsersTable = ({ users }) => {
  if (!users) {
    return null;
  }
  return (
    <div className="relative overflow-x-auto">
      <h4>User table</h4>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Username
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              key={user.id}
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {user.email}
              </th>
              <td className="px-6 py-4">{user.username}</td>
              <td className="px-6 py-4">{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
