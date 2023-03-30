import requests
import misc
import json

token = misc.token
#print(token)
#https://api.telegram.org/bot5063676274:AAFX9lWWJncO8RjDntMP5bBGzoCiIMC10-I/sendmessage?chat_id=807626742&text=hi

URL = 'https://api.telegram.org/bot' + token + '/'

def get_updates():
    url = URL + "getupdates"
    r = requests.get(url)
    return r.json()

def get_message():
    data= get_updates()
    chat_id = data['result'][-1]['message']['chat']['id']
    message_text = data['result'][-1]['message'] ['text']

    message = {'chat_id': chat_id,
                'text': message_text}
    return message
def send_message(chat_id, text='Wait a second, please...'):
    url = URL + 'sendmessage?chat_id={}&text={}'.format(chat_id,text)
    requests.get(url)



def main():
    #d = get_updates()
    print (get_message())
    # with open('updates.json', 'w') as file:
    #     json.dump(d, file, indent=2, ensure_ascii=False )
    answer = get_message()
    chat_id = answer['chat_id']
    text = answer['text']

    if "кашу" in text:
        send_message(chat_id, 'Какую?')


if __name__ == '__main__':
    main()
