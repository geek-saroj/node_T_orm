export const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    version: '1.0.0',
    title: 'REST API',
    description: '',
  },
  servers: [
    // {
    //   url: 'https://api.1system.us',
    // },
    // {
    //   url: 'https://laundry-api-testing-getii.ondigitalocean.app',
    // },
    // {
    //   url: 'http://192.168.100.12:8000',
    // },
    {
      url: 'http://localhost:3000'
    }
  ],
  schemes: ['http', 'https'],
  basePath: '',

  paths: {
    '/api/test': {
      get: {
        description: '',
        parameters: [],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },

    '/api/users/register': {
      post: {
        description: '',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    example: 'any',
                  },
                  password: {
                    example: 'any',
                  },
                  firstName: {
                    example: 'any',
                  },
                  lastName: {
                    example: 'any',
                  },
                  age: {
                    example: 'any',
                    
                  }

                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/api/public/branch/{branch_id}/services': {
      get: {
        description: '',
        parameters: [
          {
            name: 'branch_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/public/branch/{branch_id}/about': {
      get: {
        description: '',
        parameters: [
          {
            name: 'branch_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/public/branch/{branch_id}/offering/{offering_id}/details': {
      get: {
        description: '',
        parameters: [
          {
            name: 'branch_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offering_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/public/service/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/public/service/is-available': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/public/offering/{offering_id}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'offering_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/auth/register': {
      post: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    example: 'required',
                  },
                  username: {
                    example: 'optional',
                  },
                  profile_picture: {
                    example: 'optional',
                  },
                  loginAgent: {
                    example: 'any',
                  },
                  address: {
                    example: 'any',
                  },
                  otp: {
                    example: 'number',
                  },
                  password: {
                    example: 'minimum 8 characters',
                  },
                
                  latitude: {
                    example: 'number',
                  },
                  longitude: {
                    example: 'number',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/auth/set-otp': {
      post: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/auth/verify-otp': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/auth/login': {
      post: {
        description: '',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    example: 'any',
                  },
                  password: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },
    '/api/auth/switch-role': {
      post: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  role: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/auth/forgot-password': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/auth/login-method': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/auth/forgot-password/set-new': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/user/me': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/user/me/edit': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/user/me/edit/change-password': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/user/': {
      delete: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/user/service/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/user/order/tabs': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/user/order/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/user/order/{order_id}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/user/order/{order_id}/track': {
      get: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/driver/status': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/driver/dashboard': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/driver/application': {
      post: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  license_front: {
                    example: 'any',
                  },
                  license_back: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
    },

    '/api/driver/vehicle-types': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/driver/application/details': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/driver/application/document': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  license_front: {
                    example: 'any',
                  },
                  license_back: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/driver/gig/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/driver/gig/{gigId}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'gigId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/user/order/{order_id}/bidding/': {
      get: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/user/order/{order_id}/bidding/{bidding_id}/accept': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'bidding_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'gig_type',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/user/order/{order_id}/bidding/{bidding_id}/kickout-accepted': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'bidding_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'gig_type',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/driver/gig/{gigId}/accept': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'gigId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/driver/gig/{gigId}/picked': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'gigId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/driver/gig/{gig_id}/dropped': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'gig_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/driver/gig/bidding/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/driver/gig/{gig_id}/bidding/': {
      get: {
        description: '',
        parameters: [
          {
            name: 'gig_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      put: {
        description: '',
        parameters: [
          {
            name: 'gig_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/vendor/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/company-logo': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/check_services': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/application': {
      post: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  registration_document: {
                    example: 'any',
                  },
                  company_logo: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/application/details': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/application/document': {
      patch: {
        description: '',
        parameters: [],
        responses: {},
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  registration_document: {
                    example: 'any',
                  },
                  company_logo: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
      },
    },
    '/api/vendor/application/branch/{branchId}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      patch: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/vendor/branch/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/branch/add': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/branch/{id}': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/vendor/branch/{branchId}/offering/': {
      post: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      get: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/vendor/branch/{branchId}/offering/{offeringId}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offeringId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      patch: {
        description: '',
        parameters: [
          {
            name: 'branchId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'offeringId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/service/': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/service/{id}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      patch: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/vendor/service/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/order/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/order/tabs': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/vendor/order/{order_id}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/vendor/order/{order_id}/add-overage': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/order/create': {
      post: {
        description: '',
        parameters: [],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },

    '/api/order/{order_id}/details': {
      get: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/calculate-price': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/order/{order_id}/cancel': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/{order_id}/accept': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/{order_id}/reject': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/{order_id}/start-servicing': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/{order_id}/ready': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/order/{order_id}/completed': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'order_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/order/date': {
      get: {
        description: '',
        parameters: [],
        responses: {
          '200': {
            description: 'OK',
          },
        },
      },
    },

    '/api/notification/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/notification/{notification_id}': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'notification_id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'has_read',
            in: 'query',
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/notification/unread-count': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/admin/auth/login': {
      post: {
        description: '',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                type: 'object',
                properties: {
                  email: {
                    example: 'any',
                  },
                  password: {
                    example: 'any',
                  },
                },
              },
            },
          },
        },
        responses: {},
      },
    },
    '/api/admin/service/': {
      post: {
        description: '',
        parameters: [],
        responses: {},
      },
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/admin/service/{id}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
      patch: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/service/{id}/image': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'id',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },

    '/api/admin/subservice': {
      post: {
        post: {
          description: '',
          parameters: [],
          responses: {},
        },
        get: {
          description: '',
          parameters: [],
          responses: {},
        },
      }
    },

    '/api/admin/driver/': {
      get: {
        description: '',
        parameters: [
          {
            name: 'driverId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'limit',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'isverified',
            in: 'path',
            required: true,
            schema: {
              type: 'boolean',
            },
          },
          {
            name: 'search',
            in: 'path',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],

        responses: {},
      },
    },
    '/api/admin/driver/{driverId}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'driverId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/driver/{driverId}/application/accept': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'driverId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/driver/{driverId}/application/reject': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'driverId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/vendor/': {
      get: {
        description: '',
        parameters: [
          {
            name: 'driverId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'page',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'limit',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
          {
            name: 'isverified',
            in: 'path',
            required: true,
            schema: {
              type: 'boolean',
            },
          },
          {
            name: 'search',
            in: 'path',
            required: false,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/vendor/{vendorId}': {
      get: {
        description: '',
        parameters: [
          {
            name: 'vendorId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/vendor/{vendorId}/application/accept': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'vendorId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
    '/api/admin/user/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },
    '/api/admin/order/': {
      get: {
        description: '',
        parameters: [],
        responses: {},
      },
    },

    '/api/admin/vendor/{vendorId}/application/reject': {
      patch: {
        description: '',
        parameters: [
          {
            name: 'vendorId',
            in: 'path',
            required: true,
            schema: {
              type: 'string',
            },
          },
        ],
        responses: {},
      },
    },
  },
  components: {
    securitySchemes: {
      bearerAuth: {
        type: 'apiKey',
        in: 'header',
        name: 'authorization',
        description: 'Some description...',
      },
    },
  },
};
