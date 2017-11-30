# json.extract! event, :title, :details, event.attendees.each {|attendee| attendee.id}
#get attendees as an array of user ids 
#could have probably used pluck for this 
attendees = [] 
event.attendees.each do |attendee|
  attendees.push(attendee.id)
end 
json.id event.id
json.title event.title
json.details event.details
json.category event.category 
json.image_url event.image_url
json.attendees event.attendees.count
json.creator event.creator.id
json.creator_name event.creator.username
json.day event.date.day 
json.month Date::MONTHNAMES[event.date.month]
json.location event.location
if logged_in? 
  json.bookmarked current_user.bookmarked_events.pluck(:id).include?(event.id)
  json.registered current_user.attending_events.pluck(:id).include?(event.id)
else 
  json.bookmarked false
  json.registered false
end 
