
module Jekyll
  module FormatDate

    MESES = {
      1 => "janeiro",
      2 => "fevereiro",
      3 => "março",
      4 => "abril",
      5 => "maio",
      6 => "junho",
      7 => "julho",
      8 => "agosto",
      9 => "setembro",
      10 => "outubro",
      11 => "novembro",
      12 => "dezembro"
    }

    def pretty_datetime(time, stdout=false)
      hours = time.strftime("%Hh%M")
      "#{pretty_date(time)} #{hours}"
    end

    def pretty_date(time, stdout=false)
      "#{time.day} de #{MESES[time.month]} de #{time.year}"
    end

  end
end

Liquid::Template.register_filter(Jekyll::FormatDate)
