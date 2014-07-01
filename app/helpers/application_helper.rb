module ApplicationHelper
  
  def get_site 
    !ENV['site'].nil? ? ENV['site'] : "default"
  end

end
