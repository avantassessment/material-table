"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _objectSpread2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectSpread")
);
var _classCallCheck2 = _interopRequireDefault(
  require("@babel/runtime/helpers/classCallCheck")
);
var _createClass2 = _interopRequireDefault(
  require("@babel/runtime/helpers/createClass")
);
var _possibleConstructorReturn2 = _interopRequireDefault(
  require("@babel/runtime/helpers/possibleConstructorReturn")
);
var _getPrototypeOf2 = _interopRequireDefault(
  require("@babel/runtime/helpers/getPrototypeOf")
);
var _inherits2 = _interopRequireDefault(
  require("@babel/runtime/helpers/inherits")
);
var _defineProperty2 = _interopRequireDefault(
  require("@babel/runtime/helpers/defineProperty")
);
var _IconButton = _interopRequireDefault(require("@mui/material/IconButton"));
var _Tooltip = _interopRequireDefault(require("@mui/material/Tooltip"));
var _Hidden = _interopRequireDefault(require("@mui/material/Hidden"));
var _Button = _interopRequireDefault(require("@mui/material/Button"));
var _propTypes = _interopRequireDefault(require("prop-types"));
var _styles = require("@mui/styles");
var React = _interopRequireWildcard(require("react"));
function _getRequireWildcardCache(e) {
  if ("function" != typeof WeakMap) return null;
  var r = new WeakMap(),
    t = new WeakMap();
  return (_getRequireWildcardCache = function _getRequireWildcardCache(e) {
    return e ? t : r;
  })(e);
}
function _interopRequireWildcard(e, r) {
  if (!r && e && e.__esModule) return e;
  if (null === e || ("object" != _typeof(e) && "function" != typeof e))
    return { default: e };
  var t = _getRequireWildcardCache(r);
  if (t && t.has(e)) return t.get(e);
  var n = { __proto__: null },
    a = Object.defineProperty && Object.getOwnPropertyDescriptor;
  for (var u in e)
    if ("default" !== u && {}.hasOwnProperty.call(e, u)) {
      var i = a ? Object.getOwnPropertyDescriptor(e, u) : null;
      i && (i.get || i.set) ? Object.defineProperty(n, u, i) : (n[u] = e[u]);
    }
  return (n.default = e), t && t.set(e, n), n;
}
function _callSuper(t, o, e) {
  return (
    (o = (0, _getPrototypeOf2.default)(o)),
    (0, _possibleConstructorReturn2.default)(
      t,
      _isNativeReflectConstruct()
        ? Reflect.construct(
            o,
            e || [],
            (0, _getPrototypeOf2.default)(t).constructor
          )
        : o.apply(t, e)
    )
  );
}
function _isNativeReflectConstruct() {
  try {
    var t = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {})
    );
  } catch (t) {}
  return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
    return !!t;
  })();
} /* eslint-disable no-unused-vars */
/* eslint-enable no-unused-vars */
var MTablePaginationInner = /*#__PURE__*/ (function (_React$Component) {
  function MTablePaginationInner() {
    var _this;
    (0, _classCallCheck2.default)(this, MTablePaginationInner);
    for (
      var _len = arguments.length, args = new Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key];
    }
    _this = _callSuper(this, MTablePaginationInner, [].concat(args));
    (0, _defineProperty2.default)(
      _this,
      "handleFirstPageButtonClick",
      function (event) {
        _this.props.onPageChange(event, 0);
      }
    );
    (0, _defineProperty2.default)(_this, "handleBackButtonClick", function (
      event
    ) {
      _this.props.onPageChange(event, _this.props.page - 1);
    });
    (0, _defineProperty2.default)(_this, "handleNextButtonClick", function (
      event
    ) {
      _this.props.onPageChange(event, _this.props.page + 1);
    });
    (0, _defineProperty2.default)(_this, "handleNumberButtonClick", function (
      number
    ) {
      return function (event) {
        _this.props.onPageChange(event, number);
      };
    });
    (0, _defineProperty2.default)(_this, "handleLastPageButtonClick", function (
      event
    ) {
      _this.props.onPageChange(
        event,
        Math.max(0, Math.ceil(_this.props.count / _this.props.rowsPerPage) - 1)
      );
    });
    return _this;
  }
  (0, _inherits2.default)(MTablePaginationInner, _React$Component);
  return (0, _createClass2.default)(MTablePaginationInner, [
    {
      key: "renderPagesButton",
      value: function renderPagesButton(start, end) {
        var buttons = [];
        for (var p = start; p <= end; p++) {
          var buttonVariant = p === this.props.page ? "contained" : "text";
          buttons.push(
            /*#__PURE__*/ React.createElement(
              _Button.default,
              {
                size: "small",
                style: {
                  boxShadow: "none",
                  maxWidth: "30px",
                  maxHeight: "30px",
                  minWidth: "30px",
                  minHeight: "30px",
                },
                disabled: p === this.props.page,
                variant: buttonVariant,
                onClick: this.handleNumberButtonClick(p),
                key: p,
              },
              p + 1
            )
          );
        }
        return /*#__PURE__*/ React.createElement("span", null, buttons);
      },
    },
    {
      key: "render",
      value: function render() {
        var _this$props = this.props,
          classes = _this$props.classes,
          count = _this$props.count,
          page = _this$props.page,
          rowsPerPage = _this$props.rowsPerPage,
          theme = _this$props.theme,
          showFirstLastPageButtons = _this$props.showFirstLastPageButtons;
        var localization = (0, _objectSpread2.default)(
          {},
          MTablePaginationInner.defaultProps.localization,
          this.props.localization
        );
        var maxPages = Math.ceil(count / rowsPerPage) - 1;
        var pageStart = Math.max(page - 1, 0);
        var pageEnd = Math.min(maxPages, page + 1);
        return /*#__PURE__*/ React.createElement(
          "div",
          {
            className: classes.root,
          },
          showFirstLastPageButtons &&
            /*#__PURE__*/ React.createElement(
              _Tooltip.default,
              {
                title: localization.firstTooltip,
              },
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                /*#__PURE__*/ React.createElement(
                  _IconButton.default,
                  {
                    onClick: this.handleFirstPageButtonClick,
                    disabled: page === 0,
                    "aria-label": localization.firstAriaLabel,
                    size: "large",
                  },
                  theme.direction === "rtl"
                    ? /*#__PURE__*/ React.createElement(
                        this.props.icons.LastPage,
                        null
                      )
                    : /*#__PURE__*/ React.createElement(
                        this.props.icons.FirstPage,
                        null
                      )
                )
              )
            ),
          /*#__PURE__*/ React.createElement(
            _Tooltip.default,
            {
              title: localization.previousTooltip,
            },
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                _IconButton.default,
                {
                  onClick: this.handleBackButtonClick,
                  disabled: page === 0,
                  "aria-label": localization.previousAriaLabel,
                  size: "large",
                },
                /*#__PURE__*/ React.createElement(
                  this.props.icons.PreviousPage,
                  null
                )
              )
            )
          ),
          /*#__PURE__*/ React.createElement(
            _Hidden.default,
            {
              mdDown: true,
            },
            this.renderPagesButton(pageStart, pageEnd)
          ),
          /*#__PURE__*/ React.createElement(
            _Tooltip.default,
            {
              title: localization.nextTooltip,
            },
            /*#__PURE__*/ React.createElement(
              "span",
              null,
              /*#__PURE__*/ React.createElement(
                _IconButton.default,
                {
                  onClick: this.handleNextButtonClick,
                  disabled: page >= maxPages,
                  "aria-label": localization.nextAriaLabel,
                  size: "large",
                },
                /*#__PURE__*/ React.createElement(
                  this.props.icons.NextPage,
                  null
                )
              )
            )
          ),
          showFirstLastPageButtons &&
            /*#__PURE__*/ React.createElement(
              _Tooltip.default,
              {
                title: localization.lastTooltip,
              },
              /*#__PURE__*/ React.createElement(
                "span",
                null,
                /*#__PURE__*/ React.createElement(
                  _IconButton.default,
                  {
                    onClick: this.handleLastPageButtonClick,
                    disabled: page >= Math.ceil(count / rowsPerPage) - 1,
                    "aria-label": localization.lastAriaLabel,
                    size: "large",
                  },
                  theme.direction === "rtl"
                    ? /*#__PURE__*/ React.createElement(
                        this.props.icons.FirstPage,
                        null
                      )
                    : /*#__PURE__*/ React.createElement(
                        this.props.icons.LastPage,
                        null
                      )
                )
              )
            )
        );
      },
    },
  ]);
})(React.Component);
var actionsStyles = function actionsStyles(theme) {
  return {
    root: {
      flexShrink: 0,
      color: theme.palette.text.secondary,
      marginLeft: theme.spacing(2.5),
    },
  };
};
MTablePaginationInner.propTypes = {
  onPageChange: _propTypes.default.func,
  page: _propTypes.default.number,
  count: _propTypes.default.number,
  rowsPerPage: _propTypes.default.number,
  classes: _propTypes.default.object,
  localization: _propTypes.default.object,
  theme: _propTypes.default.any,
  showFirstLastPageButtons: _propTypes.default.bool,
};
MTablePaginationInner.defaultProps = {
  showFirstLastPageButtons: true,
  localization: {
    firstTooltip: "First Page",
    previousTooltip: "Previous Page",
    nextTooltip: "Next Page",
    lastTooltip: "Last Page",
    labelDisplayedRows: "{from}-{to} of {count}",
    labelRowsPerPage: "Rows per page:",
  },
};
var MTableSteppedPagination = (0, _styles.withStyles)(actionsStyles, {
  withTheme: true,
})(MTablePaginationInner);
var _default = (exports.default = MTableSteppedPagination);
