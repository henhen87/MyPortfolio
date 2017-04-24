$(document).on('click', '.more-projects', addprojects);
$(document).on('click', '.less-projects', initiateRemove);

var projectLinks = [
	{
		project: {
			heroku: "Friend Book",
			githubLink: "https://github.com/henhen87/Social-Media",
			herokuLink: "https://stark-crag-86811.herokuapp.com/friend-book/",
			imgSRC: "/assets/img/friendbook.gif"
		}
	},
	{
		project: {
			heroku: "Pure HTML Responsive Portfolio",
			githubLink: "https://github.com/henhen87/handlebar-portfolio",
			herokuLink: "https://full-stack-henry.herokuapp.com/",
			imgSRC: "/assets/img/handlebar.gif"
		}
	},
	{
		project: {
			heroku: "My Portfolio (this site)",
			githubLink: "https://github.com/henhen87/MyPortfolio",
			herokuLink: "https://nameless-savannah-54599.herokuapp.com/",
			imgSRC: "/assets/img/portfolio.gif"
		}
	}
];

var timer;
var deleter;
var count = 0;
var firstClick = false;

function initiateRemove(){
	console.log("IM HERE");
	$('.less-projects').removeClass('btn-danger').addClass('btn-info').addClass('more-projects').removeClass('less-projects').html('View More Projects');
	console.log("FIRSTCLICK initiateRemove", firstClick);
	deleter = (setInterval(removeProjects, 1000));
	console.log("IM HERE 2222");
	return;
}

//The bug with removing the divs from the second time was not working since the previously created divs
//were still there with the same 'id' attribute, so the selector was selecting divs that were already faded out and
//not the newly appended divs. Solution to this was to us the hide method to remove slowly then in callback remove
//div so that when clicking on the remove button in the future, it will correctly highlight the correct 'id'.
function removeProjects(){
	console.log("INSIDE removeProjects");
	console.log("FIRSTCLICK REMOVEPROJECTS", firstClick);
	if(firstClick){
		console.log("WTFFFFFFF")
		$('#' + count).hide('slow', function(){ $(this).remove()});
		count--;
		if(count === 0){
			firstClick = false;
			// return;
		}	
	}else{
		$('#' + count).hide('slow', function(){ $(this).remove()});
		// $('.more-projects').each(function(index){
		// 	$(this).removeAttr('id');
		// 	console.log("THIISSSS", $(this))
		// });
		count = 0;
		console.log("COUNT RESET", count);
		clearInterval(deleter);

	}
	return;
}

function addprojects(){

	// if(firstClick){
	// 	$('.more-projects').html('View More Projects');
	// 	deleter = (setInterval(removeProjects, 1000));
	// }else {
		console.log("FIRSTCLICK ADDPROJECTS", firstClick);
		if(firstClick === false){

			
			$('.more-projects').removeClass('btn-info').addClass('btn-danger').addClass('less-projects').removeClass('more-projects').html('View Less');

			firstClick = true;

			timer = (setInterval(addprojectsNow, 1000));

			return;
		}
	// }

}

function addprojectsNow(){
	console.log("FIRSTCLICK ADDPROJECTS", firstClick);
	console.log("PROJECTS LINKS OBJECT", projectLinks);
		if(count === 2){
			console.log("HEYYYYYY")
			let newProject = $('<div style="display: none;" class="col-md-6 col-md-offset-3">').attr('id', count);
			let innerDiv = $('<div class="portfolio-item well">');
			let heroku = $('<a href="' + projectLinks[count].project.herokuLink + '"' + ' target="_blank" class="col-md-12 col-sm-12 col-xs-12 col-lg-12"><h4><b>' + projectLinks[count].project.heroku + '</b></h4></a>');
			let github = $('<a href="' + projectLinks[count].project.githubLink + '"' + ' target="_blank" class="col-md-12 col-sm-12 col-xs-12 col-lg-12"><b><h4>Github Link</b></h4></a>');
			let img = $('<img style="border: solid; border-width: thin; border-style: dashed;" class="img-portfolio img-responsive" src="' + projectLinks[count].project.imgSRC + '"' + '>');
			innerDiv.append(heroku);
			innerDiv.append(github);
			innerDiv.append(img);
			newProject.append(innerDiv);
			$(newProject).appendTo('.portfolio-showcase').show('slow');

			clearInterval(timer);

			// count = 0;

			return;
		}

		let newProject = $('<div style="display: none;" class="col-md-6">').attr('id', count);
		let innerDiv = $('<div class="portfolio-item well">');
		let heroku = $('<a href="' + projectLinks[count].project.herokuLink + '"' + ' target="_blank" class="col-md-12 col-sm-12 col-xs-12 col-lg-12"><h4><b>' + projectLinks[count].project.heroku + '</b></h4></a>');
		let github = $('<a href="' + projectLinks[count].project.githubLink + '"' + ' target="_blank" class="col-md-12 col-sm-12 col-xs-12 col-lg-12"><b><h4>Github Link</b></h4></a>');
		let img = $('<img style="border: solid; border-width: thin; border-style: dashed;" class="img-portfolio img-responsive" src="' + projectLinks[count].project.imgSRC + '"' + '>');
		innerDiv.append(heroku);
		innerDiv.append(github);
		innerDiv.append(img);
		newProject.append(innerDiv);


		
		$(newProject).appendTo('.portfolio-showcase').show('slow');

		count++;

		return;
}
