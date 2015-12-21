
module Jekyll
  class CategorizeLoader < Generator
    safe true

    def generate(site)
      @all_articles = site.posts.docs
      @newest_post = @all_articles.sort { |a, b| b <=> a }[0..300]

      cover = find('cover').first

      featured_news = find('noticia', 'tipo').slice(0,6)
      relatos = find('relato', 'tipo')

      site.config['cover'] = cover
      site.config['featured_news'] = featured_news
      site.config['relatos'] = relatos
    end

    def find value, field = 'section', minimum = 0, except = []
      result = filter_with_except(value, field, @newest_post, except)
      if result.size < minimum
        result = filter_with_except(value, field, @all_articles, except)
      end

      result.sort! { |a, b| b <=> a }
      @newest_post = @newest_post - result
      result
    end

    def filter_with_except value, field, collection, except = []
      collection.select do |post|
        field_value = post.data[field] == value
        item_id = except.select do |item|
          item.id == post.id
        end

        field_value && item_id.size == 0
      end
    end
  end

end
