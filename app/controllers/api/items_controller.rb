class Api::ItemsController < ApplicationController
    def index
        @items = Item.all
        render json: @items
    end

    def destroy
    @item = Item.find(params[:id])
    @item.destroy
    head :no_content
    end

    def create
        puts request.body.read

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
