children = ['arbuzov_2000', 'ivanov_2011', 'petrov_2010', 'Bubnov_2015']


names =[]
for child_name in children:
    # arbuzov_2000  > arbuzov , 2000
    s = child_name.split('_')[0]
    if s.startswith('a'):
        continue
    names=s.title()
    #names.append(s)
print(names)
