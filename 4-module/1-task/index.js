function makeFriendsList(friends) {
  const body = document.body
  const list = document.createElement('ul');
  let insideContent = '';
  friends.map(element => insideContent += `<li>${element.firstName} ${element.lastName}</li>`);
  list.innerHTML = insideContent
  return body.appendChild(list);
}
