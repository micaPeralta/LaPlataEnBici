json.extract! station, :id, :name, :capacity, :latitude, :longitude, :estate, :created_at, :updated_at
json.url station_url(station, format: :json)
