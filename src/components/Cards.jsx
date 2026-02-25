import data from "../data.json";

function Cards() {
  return (
    <div>
      {data.map((person, id) => {
        return (
          <div className="card flex max-w-full bg-green-100" key={id}>
            <div className="image bg-green-50 w-1/4">
              <img
                src={person.logo}
                alt="Logo"
              />
              <div className="bg-amber-500 rounded-full"></div>
            </div>
            <table className="table w-3/4 bg-green-50">
              <tbody>
                <tr>
                  <td>{person.company}</td>
                  <td>{person.new && <p>NEW!</p>}</td>
                  <td>{person.featured && <p>FEATURED</p>}</td>
                </tr>
                <tr>
                  <td className="text-xl font-bold" colSpan={3}>
                    {person.position}
                  </td>
                </tr>
                <tr>
                  <td>{person.postedAt}</td>
                  <td>{person.contract}</td>
                  <td>{person.location}</td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
