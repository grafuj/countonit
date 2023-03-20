class Api::DepartmentsController < ApplicationController
  def index
    render :json => {
      message: "Departments!"

    }
  end
end
