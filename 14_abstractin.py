#1000 : 15 = mass : x
#x =
ingredients = {
    'salt': 15,
    'pepper': 5

}
def get_salt_mass(m):
    return m * 15/1000
def get_ingredient_mass(m, ingr):
    return m * ingredients.get(ingr, 0)/1000
#print(get_salt_mass(1500))                                                                                                      
print(get_ingredient_mass(1500, 'salt'))
