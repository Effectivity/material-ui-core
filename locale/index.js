"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.zhCN = exports.ukUA = exports.trTR = exports.svSE = exports.skSK = exports.ruRU = exports.roRO = exports.ptPT = exports.ptBR = exports.plPL = exports.nlNL = exports.koKR = exports.jaJP = exports.itIT = exports.idID = exports.frFR = exports.faIR = exports.esES = exports.enUS = exports.deDE = exports.csCZ = exports.azAZ = void 0;
var azAZ = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Əvvəlki səhifə',
      labelRowsPerPage: 'Səhifəyə düşən sətrlər:',
      labelDisplayedRows: function labelDisplayedRows(_ref) {
        var from = _ref.from,
            to = _ref.to,
            count = _ref.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " d\u0259n ").concat(count);
      },
      nextIconButtonText: 'Növbəti səhifə'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Ulduz';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Ulduzlar';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Silmək',
      closeText: 'Bağlamaq',
      loadingText: 'Yüklənir…',
      noOptionsText: 'Seçimlər mövcud deyil',
      openText: 'Открыть'
    }
  }
};
exports.azAZ = azAZ;
var csCZ = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Předchozí stránka',
      labelRowsPerPage: 'Řádků na stránce:',
      labelDisplayedRows: function labelDisplayedRows(_ref2) {
        var from = _ref2.from,
            to = _ref2.to,
            count = _ref2.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " z ").concat(count);
      },
      nextIconButtonText: 'Další stránka'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        if (value === 1) {
          return "".concat(value, " hv\u011Bzdi\u010Dka");
        }

        if (value >= 2 && value <= 4) {
          return "".concat(value, " hv\u011Bzdi\u010Dky");
        }

        return "".concat(value, " hv\u011Bzdi\u010Dek");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Vymazat',
      closeText: 'Zavřít',
      loadingText: 'Načítání…',
      noOptionsText: 'Žádné možnosti',
      openText: 'Otevřít'
    }
  }
};
exports.csCZ = csCZ;
var deDE = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Nächste Seite',
      labelRowsPerPage: 'Zeilen pro Seite:',
      labelDisplayedRows: function labelDisplayedRows(_ref3) {
        var from = _ref3.from,
            to = _ref3.to,
            count = _ref3.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " von ").concat(count);
      },
      nextIconButtonText: 'Nächste Seite'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? 'Sterne' : 'Stern');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Leeren',
      closeText: 'Schließen',
      loadingText: 'Wird geladen…',
      noOptionsText: 'Keine Optionen',
      openText: 'Öffnen'
    }
  }
}; // default

exports.deDE = deDE;
var enUS = {};
/**
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Previous page',
      labelRowsPerPage: 'Rows per page:',
      labelDisplayedRows: ({ from, to, count }) => `${from}-${to === -1 ? count : to} of ${count}`,
      nextIconButtonText: 'Next page',
    },
    MuiRating: {
      getLabelText: value => `${value} Star${value !== 1 ? 's' : ''}`,
      emptyLabelText: 'Empty',
    },
    MuiAutocomplete: {
      clearText: 'Clear',
      closeText: 'Close',
      loadingText: 'Loading…',
      noOptionsText: 'No options',
      openText: 'Open',
    },
  },
*/

exports.enUS = enUS;
var esES = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Filas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref4) {
        var from = _ref4.from,
            to = _ref4.to,
            count = _ref4.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " de ").concat(count);
      },
      nextIconButtonText: 'Siguiente página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrella").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpiar',
      closeText: 'Cerrar',
      loadingText: 'Cargando…',
      noOptionsText: 'Sin opciones',
      openText: 'Abierto'
    }
  }
};
exports.esES = esES;
var faIR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'صفحهٔ قبل',
      labelRowsPerPage: 'تعداد سطرهای هر صفحه:',
      labelDisplayedRows: function labelDisplayedRows(_ref5) {
        var from = _ref5.from,
            to = _ref5.to,
            count = _ref5.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " \u0627\u0632 ").concat(count);
      },
      nextIconButtonText: 'صفحهٔ بعد'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u0633\u062A\u0627\u0631\u0647");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'پاک‌کردن',
      closeText: 'بستن',
      loadingText: 'در حال بارگذاری…',
      noOptionsText: 'بی‌نتیجه',
      openText: 'بازکردن'
    }
  }
};
exports.faIR = faIR;
var frFR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Page précédente',
      labelRowsPerPage: 'Lignes par page :',
      labelDisplayedRows: function labelDisplayedRows(_ref6) {
        var from = _ref6.from,
            to = _ref6.to,
            count = _ref6.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " sur ").concat(count);
      },
      nextIconButtonText: 'Page suivante'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Etoile").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Vide'
    },
    MuiAutocomplete: {
      clearText: 'Vider',
      closeText: 'Fermer',
      loadingText: 'Chargement…',
      noOptionsText: 'Pas de résultats',
      openText: 'Ouvrir'
    }
  }
};
exports.frFR = frFR;
var idID = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Halaman sebelumnya',
      labelRowsPerPage: 'Baris per halaman:',
      labelDisplayedRows: function labelDisplayedRows(_ref7) {
        var from = _ref7.from,
            to = _ref7.to,
            count = _ref7.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " dari ").concat(count);
      },
      nextIconButtonText: 'Halaman selanjutnya'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Bintang");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Hapus',
      closeText: 'Tutup',
      loadingText: 'Memuat…',
      noOptionsText: 'Tidak ada opsi',
      openText: 'Buka'
    }
  }
};
exports.idID = idID;
var itIT = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedente',
      labelRowsPerPage: 'Righe per pagina:',
      labelDisplayedRows: function labelDisplayedRows(_ref8) {
        var from = _ref8.from,
            to = _ref8.to,
            count = _ref8.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " di ").concat(count);
      },
      nextIconButtonText: 'Pagina successiva'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Stell").concat(value !== 1 ? 'a' : 'e');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Svuota',
      closeText: 'Chiudi',
      loadingText: 'Caricamento in corso…',
      noOptionsText: 'Nessuna opzione',
      openText: 'Apri'
    }
  }
};
exports.itIT = itIT;
var jaJP = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '前のページ',
      labelRowsPerPage: 'ページごとの行:',
      labelDisplayedRows: function labelDisplayedRows(_ref9) {
        var from = _ref9.from,
            to = _ref9.to,
            count = _ref9.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " of ").concat(count);
      },
      nextIconButtonText: '次のページ'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? '出演者' : '星');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'クリア',
      closeText: '閉じる',
      loadingText: '積み込み…',
      noOptionsText: '結果がありません',
      openText: '開いた'
    }
  }
};
exports.jaJP = jaJP;
var koKR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '이전 페이지',
      labelRowsPerPage: '페이지 당 행:',
      labelDisplayedRows: function labelDisplayedRows(_ref10) {
        var from = _ref10.from,
            to = _ref10.to,
            count = _ref10.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " / ").concat(count);
      },
      nextIconButtonText: '다음 페이지'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \uC810");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: '지우기',
      closeText: '닫기',
      loadingText: '불러오는 중…',
      noOptionsText: '옵션 없음',
      openText: '열기'
    }
  }
};
exports.koKR = koKR;
var nlNL = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Vorige pagina',
      labelRowsPerPage: 'Regels per pagina :',
      labelDisplayedRows: function labelDisplayedRows(_ref11) {
        var from = _ref11.from,
            to = _ref11.to,
            count = _ref11.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " van ").concat(count);
      },
      nextIconButtonText: 'Volgende pagina'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Ster").concat(value !== 1 ? 'ren' : '');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Wissen',
      closeText: 'Sluiten',
      loadingText: 'Laden…',
      noOptionsText: 'Geen opties',
      openText: 'Openen'
    }
  }
};
exports.nlNL = nlNL;
var plPL = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Poprzednia strona',
      labelRowsPerPage: 'Wierszy na stronę:',
      labelDisplayedRows: function labelDisplayedRows(_ref12) {
        var from = _ref12.from,
            to = _ref12.to,
            count = _ref12.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " z ").concat(count);
      },
      nextIconButtonText: 'Następna strona'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'gwiazdek';
        var lastDigit = value % 10;

        if ((value < 10 || value > 20) && lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'gwiazdki';
        } else if (value === 1) {
          pluralForm = 'gwiazdka';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Wyczyść',
      closeText: 'Zamknij',
      loadingText: 'Ładowanie…',
      noOptionsText: 'Brak opcji',
      openText: 'Otwórz'
    }
  }
};
exports.plPL = plPL;
var ptBR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref13) {
        var from = _ref13.from,
            to = _ref13.to,
            count = _ref13.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " de ").concat(count);
      },
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrela").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'Carregando…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    }
  }
};
exports.ptBR = ptBR;
var ptPT = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Página anterior',
      labelRowsPerPage: 'Linhas por página:',
      labelDisplayedRows: function labelDisplayedRows(_ref14) {
        var from = _ref14.from,
            to = _ref14.to,
            count = _ref14.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " de ").concat(count);
      },
      nextIconButtonText: 'Próxima página'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Estrela").concat(value !== 1 ? 's' : '');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Limpar',
      closeText: 'Fechar',
      loadingText: 'A carregar…',
      noOptionsText: 'Sem opções',
      openText: 'Abrir'
    }
  }
};
exports.ptPT = ptPT;
var roRO = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Pagina precedentă',
      labelRowsPerPage: 'Rânduri pe pagină:',
      labelDisplayedRows: function labelDisplayedRows(_ref15) {
        var from = _ref15.from,
            to = _ref15.to,
            count = _ref15.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " din ").concat(count);
      },
      nextIconButtonText: 'Pagina următoare'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " St").concat(value !== 1 ? 'ele' : 'ea');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Șterge',
      closeText: 'Închide',
      loadingText: 'Se încarcă…',
      noOptionsText: 'Nicio opțiune',
      openText: 'Deschide'
    }
  }
};
exports.roRO = roRO;
var ruRU = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Предыдущая страница',
      labelRowsPerPage: 'Строк на странице:',
      labelDisplayedRows: function labelDisplayedRows(_ref16) {
        var from = _ref16.from,
            to = _ref16.to,
            count = _ref16.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " \u0438\u0437 ").concat(count);
      },
      nextIconButtonText: 'Следующая страница'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Звёзд';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Звезды';
        } else if (lastDigit === 1) {
          pluralForm = 'Звезда';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Очистить',
      closeText: 'Закрыть',
      loadingText: 'Загрузка…',
      noOptionsText: 'Нет доступных вариантов',
      openText: 'Открыть'
    }
  }
};
exports.ruRU = ruRU;
var skSK = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Predchádzajúca stránka',
      labelRowsPerPage: 'Riadkov na stránke:',
      labelDisplayedRows: function labelDisplayedRows(_ref17) {
        var from = _ref17.from,
            to = _ref17.to,
            count = _ref17.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " z ").concat(count);
      },
      nextIconButtonText: 'Ďalšia stránka'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        if (value === 1) {
          return "".concat(value, " hviezdi\u010Dka");
        }

        if (value >= 2 && value <= 4) {
          return "".concat(value, " hviezdi\u010Dky");
        }

        return "".concat(value, " hviezdi\u010Diek");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Vymazať',
      closeText: 'Zavrieť',
      loadingText: 'Načítanie…',
      noOptionsText: 'Žiadne možnosti',
      openText: 'Otvoriť'
    }
  }
};
exports.skSK = skSK;
var svSE = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Föregående sida',
      labelRowsPerPage: 'Rader per sida:',
      labelDisplayedRows: function labelDisplayedRows(_ref18) {
        var from = _ref18.from,
            to = _ref18.to,
            count = _ref18.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " av ").concat(count);
      },
      nextIconButtonText: 'Nästa sida'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " ").concat(value !== 1 ? 'Stjärnor' : 'Stjärna');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Rensa',
      closeText: 'Stäng',
      loadingText: 'Laddar…',
      noOptionsText: 'Inga alternativ',
      openText: 'Öppen'
    }
  }
};
exports.svSE = svSE;
var trTR = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Önceki sayfa',
      labelRowsPerPage: 'Sayfa başına satır:',
      labelDisplayedRows: function labelDisplayedRows(_ref19) {
        var from = _ref19.from,
            to = _ref19.to,
            count = _ref19.count;
        return "".concat(count, " tanesinden ").concat(from, "-").concat(to === -1 ? count : to);
      },
      nextIconButtonText: 'Sonraki sayfa'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " Y\u0131ld\u0131z");
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Temizle',
      closeText: 'Kapat',
      loadingText: 'Yükleniyor…',
      noOptionsText: 'Seçenek yok',
      openText: 'Aç'
    }
  }
};
exports.trTR = trTR;
var ukUA = {
  props: {
    MuiTablePagination: {
      backIconButtonText: 'Попередня сторінка',
      labelRowsPerPage: 'Рядків на сторінці:',
      labelDisplayedRows: function labelDisplayedRows(_ref20) {
        var from = _ref20.from,
            to = _ref20.to,
            count = _ref20.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " \u0437 ").concat(count);
      },
      nextIconButtonText: 'Наступна сторінка'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        var pluralForm = 'Зірок';
        var lastDigit = value % 10;

        if (lastDigit > 1 && lastDigit < 5) {
          pluralForm = 'Зірки';
        } else if (lastDigit === 1) {
          pluralForm = 'Зірка';
        }

        return "".concat(value, " ").concat(pluralForm);
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: 'Очистити',
      closeText: 'Згорнути',
      loadingText: 'Завантаження…',
      noOptionsText: 'Немає варіантів',
      openText: 'Розгорнути'
    }
  }
};
exports.ukUA = ukUA;
var zhCN = {
  props: {
    MuiTablePagination: {
      backIconButtonText: '上一页',
      labelRowsPerPage: '每页行数:',
      labelDisplayedRows: function labelDisplayedRows(_ref21) {
        var from = _ref21.from,
            to = _ref21.to,
            count = _ref21.count;
        return "".concat(from, "-").concat(to === -1 ? count : to, " \u7684 ").concat(count);
      },
      nextIconButtonText: '下一页'
    },
    MuiRating: {
      getLabelText: function getLabelText(value) {
        return "".concat(value, " \u661F").concat(value !== 1 ? '星' : '');
      },
      emptyLabelText: 'Empty'
    },
    MuiAutocomplete: {
      clearText: '明确',
      closeText: '关',
      loadingText: '载入中…',
      noOptionsText: '没有选择',
      openText: '打开'
    }
  }
};
exports.zhCN = zhCN;