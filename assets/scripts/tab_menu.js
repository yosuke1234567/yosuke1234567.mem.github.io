const informationCaption = document.getElementById('information-caption');
const newreleaseCaption = document.getElementById('newrelease-caption');
const informationList = document.getElementById('information-list');
const newreleaseList = document.getElementById('newrelease-list');

informationCaption.addEventListener('click', function() {
   informationCaption.setAttribute('aria-expanded', 'true');
   newreleaseCaption.setAttribute('aria-expanded', 'false');
   informationList.setAttribute('aria-hidden', 'false');
   newreleaseList.setAttribute('aria-hidden', 'true');
});

newreleaseCaption.addEventListener('click', function() {
   informationCaption.setAttribute('aria-expanded', 'false');
   newreleaseCaption.setAttribute('aria-expanded', 'true');
   informationList.setAttribute('aria-hidden', 'true');
   newreleaseList.setAttribute('aria-hidden', 'false');
});