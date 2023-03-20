class Api::ItemsController < ApplicationController
    def index
        render :json => {
            message: "Items!"
        }
    end
end
