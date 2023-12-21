const CampaignTableHome = () => {
  return (
    <div className="min-w-full bg-white p-8">
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-white">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Progress
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Sent
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Click
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Replied
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Opportunities
                    </th>
                    <th scope="col" className="px-6 py-3">
                      {/* Empty for the ellipsis */}
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {/* Repeat this row for each entry */}
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">CEO Reach</td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">67%</td>
                    <td className="px-6 py-8 whitespace-nowrap">674</td>
                    <td className="px-6 py-8 whitespace-nowrap">252</td>
                    <td className="px-6 py-8 whitespace-nowrap">83</td>
                    <td className="px-6 py-8 whitespace-nowrap">40</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">Sana Rehman</td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">11%</td>
                    <td className="px-6 py-8 whitespace-nowrap">453</td>
                    <td className="px-6 py-8 whitespace-nowrap">352</td>
                    <td className="px-6 py-8 whitespace-nowrap">86</td>
                    <td className="px-6 py-8 whitespace-nowrap">400</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">Shahid Khan</td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">674%</td>
                    <td className="px-6 py-8 whitespace-nowrap">674</td>
                    <td className="px-6 py-8 whitespace-nowrap">252</td>
                    <td className="px-6 py-8 whitespace-nowrap">83</td>
                    <td className="px-6 py-8 whitespace-nowrap">40</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">Danish khan</td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">23%</td>
                    <td className="px-6 py-8 whitespace-nowrap">6234</td>
                    <td className="px-6 py-8 whitespace-nowrap">254</td>
                    <td className="px-6 py-8 whitespace-nowrap">654</td>
                    <td className="px-6 py-8 whitespace-nowrap">65</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">
                      Junaid Ahmed
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">67%</td>
                    <td className="px-6 py-8 whitespace-nowrap">674</td>
                    <td className="px-6 py-8 whitespace-nowrap">252</td>
                    <td className="px-6 py-8 whitespace-nowrap">83</td>
                    <td className="px-6 py-8 whitespace-nowrap">40</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-8 whitespace-nowrap">Shazim Jan</td>
                    <td className="px-6 py-8 whitespace-nowrap">
                      <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                        Active
                      </span>
                    </td>
                    <td className="px-6 py-8 whitespace-nowrap">67%</td>
                    <td className="px-6 py-8 whitespace-nowrap">674</td>
                    <td className="px-6 py-8 whitespace-nowrap">252</td>
                    <td className="px-6 py-8 whitespace-nowrap">83</td>
                    <td className="px-6 py-8 whitespace-nowrap">40</td>
                    <td className="px-6 py-8 whitespace-nowrap text-right text-sm font-medium">
                      <span className="text-2xl">. . .</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignTableHome;
