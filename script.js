/**
 * @desciption fetch piblicapis ....
 * @param {String} url
 *
 */
const fetchApi = async (url) => {
  try {
    const response = await fetch(url);

    const data = await response.json();
    let title = document.getElementById("title");
    let entries = data.entries;
    let categories = data.entries.map((item) => {
      return item.Category;
    });
    categories = [...new Set(categories)];
    const categoriesSelection = document.getElementById("categories");

    categories.map((category) => {
      categoriesSelection.add(new Option(category));
    });
    const filteredEntries = entries.filter((item, index) => {
      // debugger
      return item.Category === "Animals";
    });

    filteredEntries.map((item, index) => {
      title.innerHTML += `<h1>${item.API}</h1>`;
    });
  } catch (error) {
    console.error(error);
  }
  // .THEN.CATCH promise
  //   fetch("https://api.publicapis.org/entries")
  //     .then(function (response) {
  //       // The API call was successful!
  //       if (response.ok) {
  //         return response.json();
  //       } else {
  //         return Promise.reject(response);
  //       }
  //     })
  //     .then(function (data) {
  //       let entries = data.entries;
  //       // This is the JSON from our response
  //       console.log(data.entries);
  //       let title = document.getElementById("title");

  //       const filteredEntries = entries.filter((item, index) => {
  //         return item.Category === "Animals";
  //       });

  //       filteredEntries.map((item, index) => {
  //         title.innerHTML += `<h1>${item.API}</h1>`;
  //       });
  //     })
  //     .catch(function (err) {
  //       // There was an error
  //       console.warn("Something went wrong.", err);
  //     });
};

async function init() {
  console.log("init");
  await fetchApi("https://api.publicapis.org/entries");
}
// Arrow funtion
// const init = () => {

// }
init();
