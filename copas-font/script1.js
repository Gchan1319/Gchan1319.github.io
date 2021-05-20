function wholeCopy(event) {
            // let text = event.target.previousSibling;
            let text = event.target.innerHTML;
            let copyText = '&#9989; Berhasil disalin';

            let input = document.createElement('input');
            input.setAttribute('value', text);
            document.body.appendChild(input);
            input.select();
            let result = document.execCommand('copy');
            document.body.removeChild(input);

            event.target.innerHTML= copyText;
            setTimeout(() => {event.target.innerHTML= text;}, 700)

            console.log(text);
        }

        function copyText(event) {
            // let text = event.target.previousSibling;
            let text = event.target.previousSibling.wholeText;

            let input = document.createElement('input');
            input.setAttribute('value', text);
            document.body.appendChild(input);
            input.select();
            let result = document.execCommand('copy');
            document.body.removeChild(input);
        }