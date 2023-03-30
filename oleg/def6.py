greeting = 'Hello'
to = 'world'

def greet(message, name='world'):
    result = f'{message}, {name}'
    print(result)

greet(greeting, to)
