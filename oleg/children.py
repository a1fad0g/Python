children = ['arbuzov_2000', 'ivanov_2011', 'petrov_2010', 'Bubnov_2015']

def by_year(name):
    return name.split('_')[-1]


# by_year(children[0])
print(by_year(children[0]))
