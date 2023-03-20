class Api::FoldersController < ApplicationController
    def index
        @folders = Folder.all
        render json: @folders
    end
end
