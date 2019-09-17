$('#btn-clac').on('click', (evt) => {
  const formData = $('#myform')
      .serializeArray()
      .reduce((a, c) => _.extend(a, {[c.name]: c.value}), {})
  $.ajax({type: 'post', url: 'api/add', data: formData})
      .done((data) => $('#result').val(data.sum))
      .fail((evt) => console.error(evt))
})
