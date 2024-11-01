import requests

ids = [
    232385850, 232385851, 232385852, 232385853, 232385854, 232387142, 232443066, 
    232443135, 232443136, 232443137, 232443140, 232443220, 232443221, 232443222, 
    232443223, 232443224, 232443225, 232443226, 232443248, 232443249, 232443250, 
    232443254, 232443255, 232443256, 232443257, 232443258, 232443276, 232443277, 
    232443278, 232443279, 232443565, 232443566, 232443567, 232443568, 232443569, 
    232443570, 232443578, 232443579, 232443580, 232444101, 232444102, 232444191, 
    232444210, 232454199, 232454200, 232454201
]

api_key = ''
headers = {
    'x-api-key': api_key
}

base_url = 'https://api.thecatapi.com/v1/favourites/'

# Loop para eliminar cada ID
for item_id in ids:
    url = f"{base_url}{item_id}"
    response = requests.delete(url, headers=headers)
    
    if response.status_code == 200:
        print(f"ID {item_id} eliminado exitosamente.")
    else:
        print(f"Error al eliminar ID {item_id}. Código de estado: {response.status_code}, Respuesta: {response.text}")
