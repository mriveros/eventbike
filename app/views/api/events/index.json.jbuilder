json.array! @events do |event|
  json.extract! event, :title, :details
end 
