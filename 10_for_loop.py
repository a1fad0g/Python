children = ['arbuzov_2000','ivanov_2011', 'petrov_2010', 'Bubnov_2015']
names = []
for child_name in children:
    surname = child_name.split('_')[0]
    if surname.startswith('a'):
        continue
    surname = surname.title()
    names.append(surname)
print(names)
print (4)
