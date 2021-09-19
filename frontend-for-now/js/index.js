var $symptomsArray = [];

var $messages = $('.messages-content'),
    d, h, m,
    i = 0;

$(window).load(function() {
    $messages.mCustomScrollbar();
    setTimeout(function() {
        fakeMessage();
    }, 100);
});

function updateScrollbar() {
    $messages.mCustomScrollbar("update").mCustomScrollbar('scrollTo', 'bottom', {
        scrollInertia: 10,
        timeout: 0
    });
}

function setDate() {
    d = new Date()
    if (m != d.getMinutes()) {
        m = d.getMinutes();
        $('<div class="timestamp">' + d.getHours() + ':' + m + '</div>').appendTo($('.message:last'));
    }
}

function insertMessage() {
    msg = $('.message-input').val();
    if ($.trim(msg) == '') {
        return false;
    }

    $symptomsArray.push(msg);
    console.log($symptomsArray);

    if ($symptomsArray.length === Fake.length - 1) {
        var symptoms = $symptomsArray;
      $.ajax({
        type: 'GET',
        url: 'http://localhost:3000/api/reply?symptoms='+JSON.stringify(symptoms),
        success: function(data){
            if(data[0]!==null){
                Fake[i] = Fake[i+1] + data[0];
                fakeMessage();
            }
        }
      });
      return false;
    }

    $('<div class="message message-personal">' + msg + '</div>').appendTo($('.mCSB_container')).addClass('new');
    setDate();
    $('.message-input').val(null);
    updateScrollbar();
    setTimeout(function() {
        fakeMessage();
    }, 1000 + (Math.random() * 20) * 100);
}

$('.message-submit').click(function() {
    insertMessage();
});

$(window).on('keydown', function(e) {
    if (e.which == 13) {
        insertMessage();
        return false;
    }
})

// var Fake = [
//     'Hi there, I\'m Chatbot and you?',
//     'Is there anything I can help you with?',
//     'Nice to meet you',
//     'How are you?',
//     'That\'s awesome',
//     'Why do you think that?',
//     'Can you explain?',
//     'Anyway I\'ve gotta go now',
//     'It was a pleasure chat with you',
//     'Bye',
//     ':)'
// ]

var Fake = [
	"Hey there, User",
	"I'm looking forward to getting to know you better",
	"This is where we can chat",
	"Before we get into that, I want to get sense of you've been feeling lately",
	"I've got a few questions to ask you",
	"Now let's move on to the good stuff",
	"So, where should we start?", // 1
	"Of course",
	"What did you want to talk about today?", // 2
	"Will you tell me a bit about what's going on?", // 3
	"So tell me, how are you feeling today?", // 4
	"What hasn't been going well at the moment?",
	"Keeping it short and specific, type your first one here", // 5
	"Were you bothered by not being able to stop or control worry?", // 6 - over-activity
	"Have you been bothered by little interest or pleasure in doing things?", // 7 - loss of interest
	`I'm sorry that you're going through this, I strongly recommend that you
	go to any website here: `
]

function fakeMessage() {
    if ($('.message-input').val() != '') {
        return false;
    }
    $('<div class="message loading new"><figure class="avatar"><img src="img/img.png" /></figure><span></span></div>').appendTo($('.mCSB_container'));
    updateScrollbar();

    setTimeout(function() {
        $('.message.loading').remove();
        $('<div class="message new"><figure class="avatar"><img src="img/img.png" /></figure>' + Fake[i] + '</div>').appendTo($('.mCSB_container')).addClass('new');
        setDate();
        updateScrollbar();
        i++;
    }, 1000 + (Math.random() * 20) * 100);

}
