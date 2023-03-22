class Api::ItemsController < ApplicationController
    def index
        @item = Item.all
        render json: @item
    end

    def create
        @item = Item.new(item_params)

        if @item.save
            render json: {status: :created, item: @item}
        else
            render json: {errors: @item.errors.full_messages}, status: :unprocessable_entity
        end
    end

    private
    
    def item_params
        params.require(:item).permit(:name, :quantity, :price_cents, :minimum_level, :folder_id, :image, :description, :department_id)
    end
end
