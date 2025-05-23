"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true,
});
exports.default = void 0;
var _extends2 = _interopRequireDefault(
  require("@babel/runtime/helpers/extends")
);
var _objectWithoutProperties2 = _interopRequireDefault(
  require("@babel/runtime/helpers/objectWithoutProperties")
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
var React = _interopRequireWildcard(require("react"));
var _TextField = _interopRequireDefault(require("@mui/material/TextField"));
var _Checkbox = _interopRequireDefault(require("@mui/material/Checkbox"));
var _Select = _interopRequireDefault(require("@mui/material/Select"));
var _MenuItem = _interopRequireDefault(require("@mui/material/MenuItem"));
var _FormControl = _interopRequireDefault(require("@mui/material/FormControl"));
var _FormHelperText = _interopRequireDefault(
  require("@mui/material/FormHelperText")
);
var _FormGroup = _interopRequireDefault(require("@mui/material/FormGroup"));
var _FormControlLabel = _interopRequireDefault(
  require("@mui/material/FormControlLabel")
);
var _AdapterDateFns = _interopRequireDefault(
  require("@mui/lab/AdapterDateFns")
);
var _lab = require("@mui/lab");
var _propTypes = _interopRequireDefault(require("prop-types"));
var _excluded = [
    "columnDef",
    "rowData",
    "onRowDataChange",
    "errorState",
    "onBulkEditRowChanged",
    "scrollWidth",
  ],
  _excluded2 = ["helperText", "error"],
  _excluded3 = ["helperText", "error"];
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
}
var MTableEditField = /*#__PURE__*/ (function (_React$Component) {
  function MTableEditField() {
    (0, _classCallCheck2.default)(this, MTableEditField);
    return _callSuper(this, MTableEditField, arguments);
  }
  (0, _inherits2.default)(MTableEditField, _React$Component);
  return (0, _createClass2.default)(MTableEditField, [
    {
      key: "getProps",
      value: function getProps() {
        var _this$props = this.props,
          columnDef = _this$props.columnDef,
          rowData = _this$props.rowData,
          onRowDataChange = _this$props.onRowDataChange,
          errorState = _this$props.errorState,
          onBulkEditRowChanged = _this$props.onBulkEditRowChanged,
          scrollWidth = _this$props.scrollWidth,
          props = (0, _objectWithoutProperties2.default)(
            _this$props,
            _excluded
          );
        return props;
      },
    },
    {
      key: "renderLookupField",
      value: function renderLookupField() {
        var _this = this;
        var _this$getProps = this.getProps(),
          helperText = _this$getProps.helperText,
          error = _this$getProps.error,
          props = (0, _objectWithoutProperties2.default)(
            _this$getProps,
            _excluded2
          );
        return /*#__PURE__*/ React.createElement(
          _FormControl.default,
          {
            error: Boolean(error),
          },
          /*#__PURE__*/ React.createElement(
            _Select.default,
            (0, _extends2.default)({}, props, {
              value: this.props.value === undefined ? "" : this.props.value,
              onChange: function onChange(event) {
                return _this.props.onChange(event.target.value);
              },
              style: {
                fontSize: 13,
              },
              SelectDisplayProps: {
                "aria-label": this.props.columnDef.title,
              },
            }),
            Object.keys(this.props.columnDef.lookup).map(function (key) {
              return /*#__PURE__*/ React.createElement(
                _MenuItem.default,
                {
                  key: key,
                  value: key,
                },
                _this.props.columnDef.lookup[key]
              );
            })
          ),
          Boolean(helperText) &&
            /*#__PURE__*/ React.createElement(
              _FormHelperText.default,
              null,
              helperText
            )
        );
      },
    },
    {
      key: "renderBooleanField",
      value: function renderBooleanField() {
        var _this2 = this;
        var _this$getProps2 = this.getProps(),
          helperText = _this$getProps2.helperText,
          error = _this$getProps2.error,
          props = (0, _objectWithoutProperties2.default)(
            _this$getProps2,
            _excluded3
          );
        return /*#__PURE__*/ React.createElement(
          _FormControl.default,
          {
            error: Boolean(error),
            component: "fieldset",
          },
          /*#__PURE__*/ React.createElement(
            _FormGroup.default,
            null,
            /*#__PURE__*/ React.createElement(_FormControlLabel.default, {
              label: "",
              control: /*#__PURE__*/ React.createElement(
                _Checkbox.default,
                (0, _extends2.default)({}, props, {
                  value: String(this.props.value),
                  checked: Boolean(this.props.value),
                  onChange: function onChange(event) {
                    return _this2.props.onChange(event.target.checked);
                  },
                  style: {
                    padding: 0,
                    width: 24,
                    marginLeft: 9,
                  },
                  inputProps: {
                    "aria-label": this.props.columnDef.title,
                  },
                })
              ),
            })
          ),
          /*#__PURE__*/ React.createElement(
            _FormHelperText.default,
            null,
            helperText
          )
        );
      },
    },
    {
      key: "renderDateField",
      value: function renderDateField() {
        var dateFormat =
          this.props.columnDef.dateSetting &&
          this.props.columnDef.dateSetting.format
            ? this.props.columnDef.dateSetting.format
            : "dd.MM.yyyy";
        return /*#__PURE__*/ React.createElement(
          _lab.LocalizationProvider,
          {
            dateAdapter: _AdapterDateFns.default,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            _lab.DatePicker,
            (0, _extends2.default)({}, this.getProps(), {
              format: dateFormat,
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderTimeField",
      value: function renderTimeField() {
        return /*#__PURE__*/ React.createElement(
          _lab.LocalizationProvider,
          {
            dateAdapter: _AdapterDateFns.default,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            _lab.TimePicker,
            (0, _extends2.default)({}, this.getProps(), {
              format: "HH:mm:ss",
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderDateTimeField",
      value: function renderDateTimeField() {
        return /*#__PURE__*/ React.createElement(
          _lab.LocalizationProvider,
          {
            dateAdapter: _AdapterDateFns.default,
            locale: this.props.locale,
          },
          /*#__PURE__*/ React.createElement(
            _lab.DateTimePicker,
            (0, _extends2.default)({}, this.getProps(), {
              format: "dd.MM.yyyy HH:mm:ss",
              value: this.props.value || null,
              onChange: this.props.onChange,
              clearable: true,
              InputProps: {
                style: {
                  fontSize: 13,
                },
              },
              inputProps: {
                "aria-label": "".concat(
                  this.props.columnDef.title,
                  ": press space to edit"
                ),
              },
            })
          )
        );
      },
    },
    {
      key: "renderTextField",
      value: function renderTextField() {
        var _this3 = this;
        return /*#__PURE__*/ React.createElement(
          _TextField.default,
          (0, _extends2.default)({}, this.getProps(), {
            fullWidth: true,
            style:
              this.props.columnDef.type === "numeric"
                ? {
                    float: "right",
                  }
                : {},
            type: this.props.columnDef.type === "numeric" ? "number" : "text",
            placeholder:
              this.props.columnDef.editPlaceholder ||
              this.props.columnDef.title,
            value: this.props.value === undefined ? "" : this.props.value,
            onChange: function onChange(event) {
              return _this3.props.onChange(
                _this3.props.columnDef.type === "numeric"
                  ? event.target.valueAsNumber
                  : event.target.value
              );
            },
            InputProps: {
              style: {
                fontSize: 13,
              },
            },
            inputProps: {
              "aria-label": this.props.columnDef.title,
            },
          })
        );
      },
    },
    {
      key: "renderCurrencyField",
      value: function renderCurrencyField() {
        var _this4 = this;
        return /*#__PURE__*/ React.createElement(
          _TextField.default,
          (0, _extends2.default)({}, this.getProps(), {
            placeholder:
              this.props.columnDef.editPlaceholder ||
              this.props.columnDef.title,
            style: {
              float: "right",
            },
            type: "number",
            value: this.props.value === undefined ? "" : this.props.value,
            onChange: function onChange(event) {
              var value = event.target.valueAsNumber;
              if (!value && value !== 0) {
                value = undefined;
              }
              return _this4.props.onChange(value);
            },
            InputProps: {
              style: {
                fontSize: 13,
                textAlign: "right",
              },
            },
            inputProps: {
              "aria-label": this.props.columnDef.title,
            },
            onKeyDown: this.props.onKeyDown,
            autoFocus: this.props.autoFocus,
          })
        );
      },
    },
    {
      key: "render",
      value: function render() {
        var component = "ok";
        if (this.props.columnDef.lookup) {
          component = this.renderLookupField();
        } else if (this.props.columnDef.type === "boolean") {
          component = this.renderBooleanField();
        } else if (this.props.columnDef.type === "date") {
          component = this.renderDateField();
        } else if (this.props.columnDef.type === "time") {
          component = this.renderTimeField();
        } else if (this.props.columnDef.type === "datetime") {
          component = this.renderDateTimeField();
        } else if (this.props.columnDef.type === "currency") {
          component = this.renderCurrencyField();
        } else {
          component = this.renderTextField();
        }
        return component;
      },
    },
  ]);
})(React.Component);
MTableEditField.propTypes = {
  value: _propTypes.default.any,
  onChange: _propTypes.default.func.isRequired,
  columnDef: _propTypes.default.object.isRequired,
  locale: _propTypes.default.object,
};
var _default = (exports.default = MTableEditField);
