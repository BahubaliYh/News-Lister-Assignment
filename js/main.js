$(document).ready(() => {
  $("#searchForm").on("submit", (e) => {
    let searchText = $("#searchText").val()
    getNews(searchText)
    e.preventDefault()
  })
})

function getNews(searchText) {
  axios
    .get(
      `https://content.guardianapis.com/search?q=${searchText}&api-key=test&show-fields=thumbnail`
    )
    .then((response) => {
      console.log(response)
      let news = response.data.response.results
      console.log(news)
      let output = ""
      $.each(news, (index, new1) => {
        console.log(new1)
        output += `
                <div class="col-md-12 newsCard">
                    <div class="row">
                      <div class="col-md-6 imgThumnail">
                        <img src="${new1.fields.thumbnail}" class="image">
                      </div>
                      <div class="col-md-6">
                        <h5>${new1.webTitle}</h5>
                        <a href="${new1.webUrl}" target="_blank">Click Here For More Details</a>
                      </div>
                    </div>
                </div>
                `
      })

      $("#news").html(output)
    })
    .catch((err) => {
      console.log(err)
    })
}
