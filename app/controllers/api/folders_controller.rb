class Api::FoldersController < ApplicationController
    def index
        render :json => {
            message: "Folders!"
          }
    end
end
