
$(document).ready(function(){
    
        const repoElement = $('#repo')
        const followersElement = $('#followers')
        const followingElement = $('#following')
        const endpoint = `https://api.github.com/users/ViniciusLima115`;

        fetch(endpoint)
        .then(function(resposta){
            return resposta.json();
        })
        .then(function(json){
            const repo = json.public_repos;
            const followers = json.followers;
            const following = json.following;
            const avatarUrl = json.avatar_url;

            $('#repo').text(repo);
            $('#followers').text(followers)
            $('#following').text(following)
            $('.profile-avatar').attr('src',avatarUrl);

        })

})


